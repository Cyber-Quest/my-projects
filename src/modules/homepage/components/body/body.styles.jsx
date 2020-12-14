import styled from "styled-components";   

export const BodyStyles = styled.div`
    display:flex;
    justify-content:center;
    align-items:stretch;
    width:100%;
    height:auto;
    min-height:40vh;
`; 
 
export const Container = styled.div` 
    display:flex;
    justify-content:center;  
    max-width:1024px;
    width:100%; 
    margin-top:50px;
    color:#333333 !important;
    text-align:center;
    div:nth-child(1){
        h1:nth-child(1){ 
            text-transform:capitalize; 
            color:#333333 !important;
        }
        p{ 
            color:#b3b3b3 !important;
        }
    }
`

export const Project = styled.a`
    display:flex;
    justify-content:center;  
    align-content:center;
    flex-flow:column;
    gap:20px; 
    div{
        background:linear-gradient(to top, rgba(128, 128, 128, .6), rgba(51, 51, 51, .6)),${({ image }) => `url(${image})`}; 
        background-size: cover;
        background-repeat: no-repeat; 
        width:180px;
        height:180px; 
        border-radius:50%;
        &:hover{
            background-image: ${(props) => `url(${props.image})`} !important ;
        }
    }
    h2{ 
        text-transform:capitalize; 
        color:#333333 !important;
    }

    @media only screen and (max-width: 800px) { 
        div{
             width:110px;
             height:110px; 
        }
    }
`