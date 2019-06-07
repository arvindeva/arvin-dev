import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Portfolio />
  </Layout>
);

export default PortfolioPage;
