import React from 'react';
import { withProvider as withUserProvider } from '../../contexts/user';
import composeProviders from '../../utils/compose-providers';

export const CommunityApp: React.FC = ({ children }) => {
  // any community setup goes here
  // wrapped in context providers
  return (
    <>
      {children}
    </>
  );
};

const providers = [withUserProvider];

const CommunityAppWithProviders = React.memo(
  composeProviders(providers)(CommunityApp)
);

export default CommunityAppWithProviders;