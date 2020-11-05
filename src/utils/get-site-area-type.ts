export type SiteAreaType = 'content' | 'community' | 'none';

export const checkIsContent = (domain: string): boolean => {
  return domain.includes(process.env.CONTENT_DOMAIN);
};

export const checkIsCommunity = (domain: string): boolean => {
  return domain.includes(process.env.COMMUNITY_DOMAIN);
};

export const getDomain = (ssrHost?: string): string => {
  if (ssrHost) {
    return ssrHost;
  }

  if (typeof window === 'object') {
    return window.location.hostname;
  }

  return '';
};

const getSiteAreaType = (ssrHost?: string): SiteAreaType => {
  const domain = getDomain(ssrHost);

  const isContent = checkIsContent(domain);
  const isCommunity = checkIsCommunity(domain);

  if (isContent && !isCommunity) {
    return 'content';
  }

  if (!isContent && isCommunity) {
    return 'community';
  }

  return 'none';
};


export default getSiteAreaType;