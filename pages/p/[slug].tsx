import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import type PostType from '../../interfaces/post';
import Link from 'next/link';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
              <Link
                as={`/bus-route/${post.category.slug}`}
                href="/bus-route/[slug]"
                className="hover:underline"
              >
                {post.category.name}
              </Link>
            </article>
          </>
        )}
      </Container>
    </Layout>
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
