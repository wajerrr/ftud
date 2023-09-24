import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_p');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

const getCategorySlug = (catName: string) =>
  `${catName.split(' ').join('-').toLowerCase()}`;

export function getPostBySlug(slug: string) {
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
  return items;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

const getCategories = () => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  const categories = {};
  posts.forEach((post) => {
    if (post.category) {
      const catSlug = getCategorySlug(post.category.name);
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
