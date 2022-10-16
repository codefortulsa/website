import '../styles/global.css';

import DefaultLayout from '../features/DefaultLayout';
import {MDXProvider} from '@mdx-js/react';
import components from '../features/blog/components/prose'
import type {NextPage} from 'next';
import type {AppProps} from 'next/app';

// Extend the type of the "Component" prop in AppProps below
type AppPropsWithLayout<TProps = {}, TInitialProps = {}> = AppProps<TProps> & {
  Component: NextPageWithLayout<TProps, TInitialProps>;
};

// Export an extended version of the NextPage type for use with page components
export type NextPageWithLayout<TProps = {}, TInitialProps = {}> = NextPage<
  TProps,
  TInitialProps
> & {getLayout?: null | ((page: React.ReactElement) => React.ReactNode)};

/**
 * @see https://nextjs.org/docs/advanced-features/custom-app
 * @param param0 an object containing the Page Component and any props passed in
 * from the data-fetching method on that page (getStaticProps, getServerSideProps, etc.)
 */
function MyApp({Component, pageProps}: AppPropsWithLayout) {
  // If Component.getLayout is undefined, use the DefaultLayout.
  // The layout can be disabled by setting Componenet.getLayout to null
  const getLayout: NextPageWithLayout['getLayout'] =
    Component.getLayout === null
      ? page => page
      : Component.getLayout === undefined
      ? page => <DefaultLayout>{page}</DefaultLayout>
      : Component.getLayout;

  return getLayout(
    //@ts-ignore
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
