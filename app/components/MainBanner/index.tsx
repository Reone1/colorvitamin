import * as React from 'react';

import Header from './Header';
import Wrapper from './Wrapper';
import MainBannerTextBox from './MainBannerTextBox';

export default () => {
    return (
        <Header>
            <Wrapper>
                <MainBannerTextBox>
                    <div className="title">건강한 간식을 더 자주 더 쉽게!</div>
                    <div className="desc">신선 편의식 공유배송 <b>과일냉장고</b></div>
                </MainBannerTextBox>
            </Wrapper>
        </Header>
    );
};
