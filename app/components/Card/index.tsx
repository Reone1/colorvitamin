import * as React from 'react';
import Img from 'components/Img';

import Wrapper from './Wrapper';

interface Props {
    src: string;
    title?: string;
    pricing?: string;
    price?: string;
}

export default ({ src, title, pricing, price }: Props) => {
    return(
        <Wrapper>
            <Img src={src}/>
            <div className="text-section">
                <div className="title">
                    {title}
                </div>
                <div className="pricing">
                    <span className="price">{price}</span> {pricing}
                </div>
            </div>
        </Wrapper>
    );
};
