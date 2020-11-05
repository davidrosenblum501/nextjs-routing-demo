import React from 'react';
import getSiteAreaType, { SiteAreaType } from './get-site-area-type';

export interface IOptions<CM extends {}, CT extends {}> {
  community?: React.ComponentType<CM>;
  content?: React.ComponentType<CT>;
  none?: React.ComponentType<{}>;
}

const withSiteArea = <CM extends {}, CT extends {}>(
  options: IOptions<CM, CT>
): React.FC<(CM | CT) & { siteAreaType?: SiteAreaType }> => {
  return (props): JSX.Element => {
    const { community: Community, content: Content, none: None } = options;
    const siteAreaType = props.siteAreaType || getSiteAreaType();

    switch (siteAreaType) {
      case 'community':
        return Community ? <Community {...props as CM} /> : null;

      case 'content':
        return Content ? <Content {...props as CT} /> : null;

      case 'none':
      default:
        return None ? <None /> : <></>;
    }
  };
};

export default withSiteArea;