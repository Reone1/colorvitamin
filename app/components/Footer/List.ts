import styled from 'styles/styled-components';

export default styled.div`
color:#6f7174;
margin-bottom:5px;
font-size:14px;
    div {
        display:inline-block;
    }
    .title{
        &: after{
            content:' |';
            margin-right:5px;
        }
    }
    .contents{
        
    }
`