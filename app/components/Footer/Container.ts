import styled from 'styles/styled-components';

export default styled.div`
  max-width: calc(768px + 16px * 2);
  display:block;
  margin: 0 auto;
  @media(max-width:767px){
    margin:0 15px;
  }
`;
