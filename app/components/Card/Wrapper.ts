import styled from 'styles/styled-components';

export default styled.div`
padding: 0 0 15px;
overflow:hidden;
display:inline-block;
border: 1px solid #6f7174;
border-radius:15px;
width:45%;
margin: 0 15px;
&:hover{
    transform:scale(1.01);
    transition:.3s ease-in-out;
    border-color:#27b06e;
    box-shadow:1px 1px 1px 0 #27b06e;
}
img{
    width:100%;
}
.text-section{
    text-align:center;
    margin:15px 0;
    .title{
        font-size:19px;
        font-weight:bold;
        margin-bottom:10px;
    }
    .pricing {
        .price{
            color:#27b06e;
        }
    }
}
@media(max-width:768px){
    width: calc(100vw - 30px);
    margin:10px 15px;
}
`;
