import Container from '../../components/container';
import HeroPost from '../../components/hero-post';
import Intro from '../../components/intro';
import Layout from '../../components/layout';
import { getCategoryBySlug } from '../../lib/api';
import Head from 'next/head';
import Post from '../../interfaces/post';
import { getAllCategoriesWithPosts } from '../../lib/api';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

type Props = {
  posts: Post[];
  slug: string;
  name: string;
};

export default function Index({ posts = [] }: Props) {
  const heroPost = posts[0];
  return (
    <>
      <Layout>
        <Head>
          <title>From The Upper Deck</title>
        </Head>
        <Container>
          <Intro />
          {posts.map((post, index) => {
            return (
              <HeroPost
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                excerpt={heroPost.excerpt}
                key={index}
              />
            );
          })}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params: { slug: catSlug } }: Params) => {
  const { slug, name, posts } = getCategoryBySlug(catSlug);
  console.log('bus-route!!!!', slug, name);
  return {
    props: { slug, name, posts },
  };
};

export async function getStaticPaths() {
  const categories = getAllCategoriesWithPosts() as any;

  return {
    paths: categories.map((cat) => {
      console.log('cat', cat);
      return {
        params: {
          slug: cat.slug,
        },
      };
    }),
    fallback: false,
  };
}
