import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import PostType from '../interfaces/post';

const postsDirectory = join(process.cwd(), '_p');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

const getTagSlug = (catName: string) =>
  `${catName.split(' ').join('-').toLowerCase()}`;

function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const item = { ...data };

  item.slug = realSlug;
  item.content = content;

  if (data.tags) {
    item.tags = [];
    data.tags.forEach((tag) => {
      item.tags.push({
        name: tag,
        slug: getTagSlug(tag),
      });
    });
  }
  item.vertical = Boolean(data.vertical);
  item.displayOnHomepage = Boolean(data.displayOnHomepage);
  return item;
}

export function getPostBySlugAPI(slug: string) {
  const posts = getAllPosts();
  const realSlug = slug.replace(/\.md$/, '');
  return posts.find((post) => post.slug === realSlug);
}

const addPreviousAndNext = (post: PostType, index, posts: PostType[]) => {
  const newPost = { ...post };
  const nextPost = posts[index - 1];
  const previousPost = posts[index + 1];

  if (previousPost) {
    newPost.previousPost = {
      name: previousPost.title,
      slug: previousPost.slug,
    };
  }
  if (nextPost) {
    newPost.nextPost = {
      name: nextPost.title,
      slug: nextPost.slug,
    };
  }
  return newPost;
};

const addPreviousAndNextFromHomepage = (
  post: PostType,
  index,
  posts: PostType[],
) => {
  const newPost = { ...post };
  const homepagePosts = posts.filter((p) => p.displayOnHomepage);
  const nextPost = homepagePosts[index - 1];
  const previousPost = homepagePosts[index + 1];

  if (previousPost) {
    newPost.previousPostFromHomepage = {
      name: previousPost.title,
      slug: `${previousPost.slug}?gallery=homepage`,
    };
  }
  if (nextPost) {
    newPost.nextPostFromHomepage = {
      name: nextPost.title,
      slug: `${nextPost.slug}?gallery=homepage`,
    };
  }
  return newPost;
};

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .map(addPreviousAndNext)
    .map(addPreviousAndNextFromHomepage);
  return posts;
}

export function getAllHomepagePosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.displayOnHomepage)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .map(addPreviousAndNext);
  return posts;
}

const getTags = () => {
  const posts = getAllPosts();
  const tags = {};
  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        const tagSlug = tag.slug;
        if (tags[tagSlug]) {
          tags[tagSlug].posts.push(post);
        } else {
          tags[tagSlug] = {};
          tags[tagSlug].slug = tagSlug;
          tags[tagSlug].name = tag.name;
          tags[tagSlug].posts = [post];
        }
      });
    }
  });
  return tags || {};
};

export const getAllTagsWithPosts = () => Object.values(getTags());
export const getTagBySlug = (slug: string) => getTags()[slug];
