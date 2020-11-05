import { NextPage, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import withCommunityAppLayout from '../components/layout-community/with-community-app-layout';
import withContentAppLayout from '../components/layout-content/with-content-app-layout';
import getSiteAreaType from '../utils/get-site-area-type';
import withSiteArea from '../utils/with-site-area';

const HomeCommunityPage: NextPage = () => {
  //sSite area type is accessible via props
  const HomeCommunity = dynamic(() => import('../components/home-community'));
  return <HomeCommunity />;
};

const HomeContentPage: NextPage = () => {
  // site area type is accessible via props
  const HomeContent = dynamic(() => import('../components/home-content'));
  return <HomeContent />;
};

export const getServerSideProps = async (context: NextPageContext) => {
  const host = context.req.headers['host'];
  const siteAreaType = getSiteAreaType(host);

  // LOGIC BASED ON SITE AREA TYPE
  return { props: { siteAreaType } };
};

export default withSiteArea({
  community: withCommunityAppLayout()(HomeCommunityPage),
  content: withContentAppLayout()(HomeContentPage),
});