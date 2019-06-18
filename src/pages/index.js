import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/Index/About';
import CTAImages from '../components/Index/CTAImages';
import HeroSlider from '../components/Index/HeroSlider';
import Quote from '../components/Index/Quote';
import LatestTrend from '../components/Index/LatestTrend';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Vika Raskina']}/>
    <HeroSlider />
    <CTAImages />
    <LatestTrend />
    <Quote />
    <About />
  </Layout>
)

export default IndexPage
