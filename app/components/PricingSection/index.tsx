import * as React from 'react';
import Card from 'components/Card';

import SetMenuImg from './img/SetMenuImg.jpg';
import Kiwi from './img/Kiwi.jpg';
import Wrapper from './Wrapper';

export default () => {
    return(
        <Wrapper>
            <Card src={Kiwi} title="[최애과일 픽미픽미]" price="9,900 원 ~ " pricing="/ 1주"/>
            <Card src={SetMenuImg} title="[내맘대로 골라담기]" price="14,900 원 ~"pricing="/ 1주"/>
        </Wrapper>
    );
};
