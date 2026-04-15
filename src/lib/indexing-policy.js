import policy from '@/seo/indexing-policy.json';

export function shouldIndexPath(pathname) {
  if (policy.noindexRoutes.includes(pathname)) {
    return false;
  }

  return !policy.noindexPrefixes.some((prefix) => pathname.startsWith(prefix));
}

export function shouldIndexBlogSlug() {
  return true;
}

export function shouldIndexTreatmentSlug() {
  return false;
}

export function getRobotsForPath(pathname) {
  if (shouldIndexPath(pathname)) {
    return undefined;
  }

  return {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };
}

export const indexingPolicy = policy;
