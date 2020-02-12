import styled from 'styles/styled-components';

export default styled.div`
color:#6f7174;
    div {
        display:inline-block;
    }
    .title{
        font-weight:bold
        &: after{
            content:'|';
            margin-right:5px;
        }
    }
    .contents{
        
    }
`