import * as React from 'react';

import TitleContainer from './TitleContainer';
interface Props {
    title: string;
    subtitle?: string;
}

export default (props: Props) => {
    const {title, subtitle} = props;
    return(
        <TitleContainer>
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
        </TitleContainer>
    );
};
