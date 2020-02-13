import * as React from 'react';

import Wrapper from './Wrapper';
import Button from './Button';

const applyGogggleFormPath = 'https://forms.gle/Yne1Fv4zGHTFHMAW7';

export default () => {
    return(
    <Wrapper>
        <Button href={`${applyGogggleFormPath}`}>신 청 하 기</Button>
    </Wrapper>
    );
};
