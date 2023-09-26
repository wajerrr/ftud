export type PrevNextPostType = {
  slug: string;
  name: string;
};

export type TagType = {
  slug: string;
  name: string;
};

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  vertical: boolean
  ogImage: {
    url: string;
  };
  content: string;
  category?: {
    name: string;
    slug: string;
  };
  previousPost: PrevNextPostType;
  nextPost?: PrevNextPostType;
  tags?: TagType[];
};

export default PostType;
