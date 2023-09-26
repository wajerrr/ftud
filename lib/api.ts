import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import PostType from '../interfaces/post';

const postsDirectory = join(process.cwd(), '_p');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

const getCategorySlug = (catName: string) =>
  `${catName.split(' ').join('-').toLowerCase()}`;

const getTagSlug = (catName: string) =>
  `${catName.split(' ').join('-').toLowerCase()}`;

function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items = { ...data };

  items.slug = realSlug;
  items.content = content;
  if (data.category) {
    items.category = {
      name: data.category,
      slug: getCategorySlug(data.category),
    };
  }

  if (data.tags) {
    items.tags = [];
    data.tags.forEach((tag) => {
      items.tags.push({
        name: tag,
        slug: getTagSlug(tag),
      });
    });
  }
  items.vertical = Boolean(data.vertical);
  return items;
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

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .map(addPreviousAndNext);
  return posts;
}

const getCategories = () => {
  const posts = getAllPosts();
  const categories = {};
  posts.forEach((post) => {
    if (post.category) {
      const catSlug = post.category.slug;
      if (categories[catSlug]) {
        categories[catSlug].posts.push(post);
      } else {
        categories[catSlug] = {};
        categories[catSlug].slug = catSlug;
        categories[catSlug].name = post.category.name;
        categories[catSlug].posts = [post];
      }
    }
  });
  return categories || {};
};

export const getAllCategoriesWithPosts = () => Object.values(getCategories());
export const getCategoryBySlug = (slug: string) => getCategories()[slug];

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
