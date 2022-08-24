import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  url: string;
  children?: React.ReactNode;
};

const SeoHead = ({title, description, url, children}: Props) => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" key="description" content={description} />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:url" key="og:url" content={url} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta property="og:type" key="og:type" content="website" />
      <meta name="twitter:card" key="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        key="twitter:creator"
        content="CodeForTulsa"
      />
      <meta name="twitter:title" key="twitter:title" content={title} />
      <meta
        name="twitter:description"
        key="twitter:description"
        content={description}
      />
      {children}
    </Head>
  );
};

export default SeoHead;
