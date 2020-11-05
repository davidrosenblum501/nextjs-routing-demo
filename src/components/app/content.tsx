import React from 'react';
import { withProvider as withUserProvider } from '../../contexts/user';
import composeProviders from '../../utils/compose-providers';

export const ContentApp: React.FC = ({ children }) => {
  // any content setup goes here
  // wrapped in context providers
  return (
    <>
      {children}
    </>
  );
};

const providers = [withUserProvider];

const ContentAppWithProviders = React.memo(
  composeProviders(providers)(ContentApp)
);

export default ContentAppWithProviders;