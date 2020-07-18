import React, { Context } from 'react';
import LottoBidsProvider from './LottoBidsProvider';
import LottoPlusBidsProvider from '../Providers/LottoPlusBidsProvider';
import LottoSetsProvider from './LottoSetsProvider';
import LottoPlusSetsProvider from './LottoPlusSetsProvider';

type Props = {
  contexts: any;
};

const ProviderComposer: React.FC<Props> = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids: React.Context<Context<any>>, parent: any) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children,
  );

const MainProvider: React.FC = ({ children }) => (
  <ProviderComposer
    contexts={[
      <LottoBidsProvider />,
      <LottoPlusBidsProvider />,
      <LottoSetsProvider />,
      <LottoPlusSetsProvider />,
    ]}
  >
    {children}
  </ProviderComposer>
);

export default MainProvider;
