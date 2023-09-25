import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import type PostType from '../../interfaces/post';
import Link from 'next/link';
import { BLOG_NAME } from '../../lib/constants';
import CoverImage from '../../components/cover-image';
import DateFormatter from '../../components/date-formatter';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  const title = `${BLOG_NAME} | ${post.title}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <article className="mb-32">
        <Head>
          <title>{title}</title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head>

        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={post.title} src={post.coverImage} />
        </div>
        {post.category && (
          <Link
            as={`/bus-route/${post.category.slug}`}
            href="/bus-route/[slug]"
            className="hover:underline"
          >
            Bus Route: {post.category.name}
          </Link>
        )}
        <PostBody content={post.content} />
      </article>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
