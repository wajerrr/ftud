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
  dateTaken: string;
  photo: string;
  excerpt: string;
  vertical: boolean;
  ogImage: {
    url: string;
  };
  content: string;
  previousPost: PrevNextPostType;
  nextPost?: PrevNextPostType;
  tags?: TagType[];
};

export default PostType;
