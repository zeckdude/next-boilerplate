import Head from 'next/head';
import PropTypes from 'prop-types';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>At the Box Score</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object,
};

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
