import Container from '../components/container';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts = [] }: Props) {
  const heroPost = allPosts[0];
   return (
    <>
      <Layout>
        <Head>
          <title>From The Upper Deck</title>
        </Head>
        <Container>
          <Intro />
          {allPosts.map((post, index) => {
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
          {/* <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          /> */}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
