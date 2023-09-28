import Container from '../../components/container';
import HeroPost from '../../components/hero-post';
import { getAllTagsWithPosts, getTagBySlug } from '../../lib/api';
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

      <h2 className="py-8 text-2xl font-semi-bold tracking-tight leading-tight">
        {name}
      </h2>
      {posts.map((post, index) => {
        return (
          <HeroPost
            vertical={post.vertical}
            title={post.title}
            photo={post.photo}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            key={index}
            priority={Boolean(index < 3)}
          />
        );
      })}
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
