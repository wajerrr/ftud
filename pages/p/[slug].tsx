import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '../../components/post-body';
import { getPostBySlugAPI, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import type PostType from '../../interfaces/post';
import Link from 'next/link';
import { BLOG_NAME, BLOG_URL } from '../../lib/constants';
import CoverImage from '../../components/cover-image';
import PrevNextMenu from '../../components/landing-page/prev-next';
import Tags from '../../components/tags';

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
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
          <meta
            property="og:image"
            content={`${BLOG_URL}${post.ogImage.url}`}
            key="image"
          />
        </Head>
        <PrevNextMenu
          previousPost={post.previousPost}
          nextPost={post.nextPost}
        />
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage
            vertical={post.vertical}
            title={post.title}
            src={post.coverImage}
          />
        </div>

        <PostBody content={post.content} />
      </article>
      <Tags tags={post.tags} />
      {post.category && (
        <Link
          as={`/bus-route/${post.category.slug}`}
          href="/bus-route/[slug]"
          className="hover:underline"
        >
          Bus Route: {post.category.name}
        </Link>
      )}
      <PrevNextMenu previousPost={post.previousPost} nextPost={post.nextPost} />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlugAPI(params.slug);
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
