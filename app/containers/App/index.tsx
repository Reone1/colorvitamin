/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styles/styled-components';
// import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ChannelTalk from 'components/ChannelTalk';

import GlobalStyle from '../../global-styles';
import MainBanner from 'components/MainBanner';
import FeatureSection from 'components/FeatureSection';
import PricingSection from 'components/PricingSection';
import ApplySection from 'components/ApplySection';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="과일냉장고"
        defaultTitle="과일냉장고"
      >
        <meta name="description" content="colorVitamin" />
        {ChannelTalk.boot({
          pluginKey: '6c76ca3b-dbad-41d0-8464-ca4308c13f16',
        })}
      </Helmet>
      <Header />
      <MainBanner/>
      <FeatureSection />
      <PricingSection />
      <ApplySection/>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
