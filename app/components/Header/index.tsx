import * as React from 'react';
import {Helmet} from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import Wrapper from './Wrapper';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <Wrapper>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Sunflower:300&display=swap" rel="stylesheet"/>
      </Helmet>
      <NavBar>
       과 일 냉 장 고
      </NavBar>
    </Wrapper>
  );
}

export default Header;
