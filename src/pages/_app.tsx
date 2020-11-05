import { AppProps } from 'next/app';
import { SiteAreaType } from '../utils/get-site-area-type';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CommunityApp } from '../components/app/community';
import { ContentApp } from '../components/app/content';

const NextApp = ({ Component, pageProps }: AppProps) => {
  const siteAreaType: SiteAreaType = pageProps.siteAreaType;

  switch (siteAreaType) {
    case 'community':
      return (
        <CommunityApp>
          <Component {...pageProps} />
        </CommunityApp>
      );

    case 'content':
      return (
        <ContentApp>
          <Component {...pageProps} />
        </ContentApp>
      );

    default:
      return <Component {...pageProps} />;
  }
};

export default NextApp;