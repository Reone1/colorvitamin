import * as React from 'react'
import Wrapper from './Wrapper'
import TextTitle from 'components/TextTitle'
import Description from './Description';

export default () => {
    return(
        <Wrapper>
            <TextTitle title="건강한 간식을 더 자주 더 쉽게!" subtitle="신선 편의식 공유배송"/>
            <Description>뭉치면 과일로켓 발사!<br/>
            관악구 사무실, 학원 등 매일 무료배송<br/>
            <br />
            구독상품 내용물 (선택 항목)<br/>
            사과, 바나나, 방울토마토, 키위, 단감, 파인애플, 체리, 청포도, 한라봉, 다양하게~
            </Description>
        </Wrapper>
    );
};
