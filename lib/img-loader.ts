function isClient() {
  return !!(typeof window != 'undefined' && window.document);
}

export default function myImageLoader({ src, width, quality }) {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  const isClientSide = isClient();
  let imgPrefix = '';
  if (isClientSide && window.location.href.includes('wajerrr.github.io/ftud')) {
    imgPrefix = '/ftud'
  }

  if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
    imgPrefix = `/${repo}`;
  }
  return `${imgPrefix}${src}`;
}
