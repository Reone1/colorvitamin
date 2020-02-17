import styled from 'styles/styled-components';

export default styled.div`
    max-width: calc(768px + 16px * 2);
    margin:30px auto;
    @media(max-width: 767px) {
        margin:30px 25px;
    }
`;
