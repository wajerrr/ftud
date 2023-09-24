type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  category?: {
    name: string;
    slug: string;
  };
};

export default PostType;
