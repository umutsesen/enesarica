import { SITE_URL, SITE_NAME, PORTRAIT_URL } from './site';

export function createPageMetadata({ title, description, path = '/', type = 'website', publishedTime, modifiedTime, robots }) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const image = { url: PORTRAIT_URL, width: 2048, height: 1368, alt: SITE_NAME };
  return {
    title,
    description,
    alternates: { canonical: url },
    ...(robots ? { robots } : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'tr_TR',
      type,
      images: [image],
      ...(type === 'article' ? {
        publishedTime,
        modifiedTime,
        authors: [`${SITE_URL}/hakkimda`],
      } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
