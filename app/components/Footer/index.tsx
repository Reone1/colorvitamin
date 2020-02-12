import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Title from './Title';
import Container from './Container';
import Wrapper from './Wrapper';
import List from './List';

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Title>
            <b>과일냉장고</b>
        </Title>
        <List>
            <div className="title">평 일</div>
            <div className="contents">9:00 - 18:00</div>
        </List>
        <List>
            <div className="title">토요일</div>
            <div className="contents">9:00 - 13:00 (홈페이지 채팅문의만 운영)</div>
        </List>
        <List>
            <div className="title">공휴일</div>
            <div className="contents">휴무</div>
        </List>
        <List>
            <div className="title">점 심</div>
            <div className="contents">13:00 - 14:00</div>
        </List>
        <List>
            <div className="title">대표</div>
            <div className="contents">민효식</div>
        </List>
      </Container>
    </Wrapper>
  );
}

export default Footer;
