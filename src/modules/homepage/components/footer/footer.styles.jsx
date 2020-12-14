import styled from "styled-components";  

export const FooterPanelStyles = styled.div`
    display:flex;
    align-items:center;
    flex-flow:column;
    width:100%;
    margin-top:100px;
    height:auto; 
    background:#333333;
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) ;
    box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FooterContainer = styled.div`
    display:flex;
    justify-content:center; 
    height:100px; 
    @media only screen and (max-width: 800px) { 
        justify-content:center;
        margin-top:10px; 
    }
`;

export const CopyRight = styled.div` 
    border-top:1px solid #595959;
    text-align:center; 
    color:#808080;
    width:100%; 
    padding:30px 0px;
    margin-top:20px;
`;

export const Logo = styled.div`
    display: flex; 
    justify-content:flex-start; 
    color:#808080;
    font-family: 'Sansita Swashed', cursive;
    line-height:26px;
    font-size:30px;
`;
 
export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  align-items: center; 
  text-align: justify;
  width: 200px;
  height: auto; 
  font-size:15px; 
  & .ant-anchor-link{
      width:100px !important;
  } 
`;
 
export const SocialNetworks = styled.div`  
 display:flex;
 flex-wrap:wrap; 
 line-height:35px;
 gap:0px 20px;
 font-size:25px; 
 width: 150px; 
 margin-left:90px;
 a{ 
   cursor:pointer;
   color:#808080 !important;
 }
 a:hover {
  color:white !important;
 }
 @media only screen and (max-width: 800px) { 
    justify-content:center;
    margin-top:10px; 
 }
`