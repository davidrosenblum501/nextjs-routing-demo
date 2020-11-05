import { NextPage } from 'next';
import ContentError404 from '../../../components/error/content-404';
import GroupCreate from '../../../components/group/create';
import withCommunityAppLayout from '../../../components/layout-community/with-community-app-layout';
import withContentAppLayout from '../../../components/layout-content/with-content-app-layout';
import withSiteArea from '../../../utils/with-site-area';

const GroupCreatePage: NextPage = () => {
  return <GroupCreate />;
};

export default withSiteArea({
  community: withCommunityAppLayout()(GroupCreatePage),
  content: withContentAppLayout()(ContentError404),
});