import { NextPage, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import getSiteAreaType, { SiteAreaType } from '../utils/get-site-area-type';
import withContentAppLayout from '../components/layout-content/with-content-app-layout';
import withCommunityAppLayout from '../components/layout-community/with-community-app-layout';

export interface IServerSideProps {
  articleId?: number;
  siteAreaType: SiteAreaType;
}

const SlugPage: NextPage<IServerSideProps> = ({ articleId, siteAreaType }) => {
  // if the slug is needed
  const router = useRouter();
  const { slug } = router.query as any as { slug: string[] };
  const [type] = slug;

  // show community 404 for community
  if (siteAreaType === 'community') {
    // TODO - do layout in separate component
    const CommunityError404Component = dynamic(() => import('../components/error/community-404'));
    const CommunityError404 = withCommunityAppLayout()(CommunityError404Component);
    return <CommunityError404 />;
  }

  // if content and path matches a component
  if (siteAreaType === 'content') {
    if (type === 'articles' && articleId) {
      // TODO - do layout in separate component
      const ArticleComponent = dynamic(() => import('../components/article'));
      const Article = withContentAppLayout()(ArticleComponent);
      return <Article articleId={articleId} />;
    }
  }

  // fallback is content 404
  // TODO - do layout in separate component
  const ContentError404Component = dynamic(() => import('../components/error/content-404'));
  const ContentError404 = withContentAppLayout()(ContentError404Component);
  return <ContentError404 />;
};

export const getServerSideProps = async (
  context: NextPageContext
): Promise<{ props: IServerSideProps }> => {
  const host = context.req.headers['host'];
  const siteAreaType = getSiteAreaType(host);

  // LOGIC BASED ON SITE AREA TYPE

  if (siteAreaType === 'content') {
    // fetch article info - probably using the 'path'
    // returns fake article id

    // GET WHICH TEMPLATE FROM GRAPHQL AND PASS IT VIA PROPS TO PAGE COMPONENT
    return { props: { siteAreaType, articleId: 1 } };
  }

  return { props: { siteAreaType } };
};

export default SlugPage;