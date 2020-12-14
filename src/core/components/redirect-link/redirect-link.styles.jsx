
import styled from 'styled-components';
import { Anchor} from 'antd';  

const { Link } = Anchor;
 
export const RedirectLinkPanel= styled(Link)`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500; 
  font-size: 16px;  
  border-radius: 4px;
  color:white !important;
  padding:0px !important;
  background: transparent !important;
  border: 1px solid ${(props) => props.theme.primary_color} !important; 
  width:100px;
  border-radius:15px;
  text-align:center;
  margin-left:15px;
  height:33px;
  &:disabled {
    opacity: 0.7;
  } 
  &:hover{
    background: ${(props) => props.theme.primary_color} !important; 
  }
  &.ant-anchor-link .ant-anchor-link-title{
    color:#00ccff  !important;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%; 
  }  

  &:hover.ant-anchor-link .ant-anchor-link-title{
    color:white !important;
  }  
`;