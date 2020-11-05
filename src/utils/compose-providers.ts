import React from 'react';

const composeProviders = <P extends {}>(
  providers: ((component: React.FC<P>) => React.FC<P>)[]
) => {
  return (Component: React.FC<P>): React.FC<P> => {
    return providers.reduce(
      (component, withProvider) => withProvider(component),
      Component
    );
  };
};

export default composeProviders;