import { ReactElement } from 'react';
import Head from 'next/head';
import { TEXT } from '../../constants/text';
const Layout = ({
  children,
  title,
}: {
  children: Node;
  title: string;
}): ReactElement => {
  return (
    <>
      <Head>
        <title>{title || TEXT.DEFAULT_TITLE} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Keywords" content="Recipes, Application" />
        <meta name="Description" content="Recipes Application" />
      </Head>

      <div className="app">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
