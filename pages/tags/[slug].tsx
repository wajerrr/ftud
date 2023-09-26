import Container from '../../components/container';
import HeroPost from '../../components/hero-post';
import {
  getAllTagsWithPosts,
  getCategoryBySlug,
  getTagBySlug,
} from '../../lib/api';
import Head from 'next/head';
import Post from '../../interfaces/post';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

type Props = {
  posts: Post[];
  slug: string;
  name: string;
};

export default function Index({ posts = [], name }: Props) {
  return (
    <>
      <Head>
        <title>From The Upper Deck | {name}</title>
      </Head>
      <Container>
        <h2 className="py-8 text-2xl font-semi-bold tracking-tight leading-tight">
          {name}
        </h2>
        {posts.map((post, index) => {
          return (
            <HeroPost
              vertical={post.vertical}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              key={index}
            />
          );
        })}
      </Container>
    </>
  );
}

export const getStaticProps = async ({ params: { slug: catSlug } }: Params) => {
  const { slug, name, posts } = getTagBySlug(catSlug);
  return {
    props: { slug, name, posts },
  };
};

export async function getStaticPaths() {
  const categories = getAllTagsWithPosts() as any;

  return {
    paths: categories.map((cat) => {
      return {
        params: {
          slug: cat.slug,
        },
      };
    }),
    fallback: false,
  };
}
