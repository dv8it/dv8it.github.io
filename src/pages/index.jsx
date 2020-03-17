import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Services />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
