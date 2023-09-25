export default function myImageLoader({ src, width, quality }) {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;

  let imgPrefix = '';
  if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
    imgPrefix = `/${repo}`;
  }
  return `${imgPrefix}${src}`;
}
