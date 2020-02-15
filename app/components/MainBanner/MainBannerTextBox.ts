import styled from 'styles/styled-components';

export default styled.div`
  color:white;
  font-family:'Roboto', sans-serif;
  margin-bottom: 20px;
  @media(max-width: 767px) {
    margin-left: 15px ;
    text-align:center;
  }
  .title{
    font-size: 17px;
    margin-bottom:10px;
    margin-top:10px;
  }
  .desc{
      font-size:14px;
      b {
          color:#27b06e;
      }
  }
`;
