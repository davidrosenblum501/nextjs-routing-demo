import { NextPage } from 'next';
import { useRouter } from 'next/router';
import ContentError404 from '../../components/error/content-404';
import Group from '../../components/group/id';
import withCommunityAppLayout from '../../components/layout-community/with-community-app-layout';
import withContentAppLayout from '../../components/layout-content/with-content-app-layout';
import withSiteArea from '../../utils/with-site-area';

const GroupPage: NextPage = () => {
  const router = useRouter();
  const { group_id: groupId } = router.query as any as { group_id: number };

  return <Group groupId={groupId} />;
};

export default withSiteArea({
  community: withCommunityAppLayout()(GroupPage),
  content: withContentAppLayout()(ContentError404),
});