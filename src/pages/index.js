import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/Home';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="arvindeva wibisono"
      keywords={[
        `arvindeva wibisono`,
        `arvindeva`,
        `wibisono`,
        `front end`,
        `react`,
        `engineer`,
        `software`,
        `developer`,
        `gatsby`,
        `warung pintar`,
        `jakarta`,
        `ade`,
        `arvin`,
        `dev`,
      ]}
    />
    <Home />
  </Layout>
);

export default IndexPage;
