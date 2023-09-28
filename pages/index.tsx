import HeroPost from '../components/hero-post';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts = [] }: Props) {
  return (
    <>
      {allPosts.map((post, index) => {
        return (
          <HeroPost
            title={post.title}
            photo={post.photo}
            vertical={post.vertical}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            key={index}
            index={index}
          />
        );
      })}
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
