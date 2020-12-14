import styled, { css } from "styled-components";
import { Button } from "antd";

const PrimaryButton = css`
  color: white !important;
  background: ${(props) => props.theme.primary_color} !important;
  border: 1px solid ${(props) => props.theme.primary_color} !important ;
  padding:9px 20px;
  width:auto;
  border-radius:8px;
  height:40px;
  text-align:center;
  &:hover{
    background: transparent !important;
    color: ${(props) => props.theme.primary_color} !important;
  }
`;

const SecondaryButton = css`
  color: ${(props) => props.theme.secondary_font_color} !important;
  background: ${(props) => props.theme.secondary_color} !important;
  border: none;
`;

const ThirdButton = css`
  color: ${(props) => props.theme.secondary_font_color} !important;
  background: ${(props) => props.theme.third_color} !important;
  border: none;
`;

const FourthButton = css`
  color: ${(props) => props.theme.secondary_font_color} !important;
  background: ${(props) => props.theme.fourth_color} !important;
  border: none;
`;

const DefaultButton = css`
  color: ${(props) => props.theme.primary_font_color} !important;
  background: ${(props) => props.theme.default_color} !important;
  border: none;
`;

const OutlinedPrimaryButton = css`
  color: ${(props) => props.theme.primary_color} !important;
  background: transparent !important;
  border: 1px solid ${(props) => props.theme.primary_color} !important ;
  padding:9px 20px;
  width:auto;
  border-radius:8px;
  height:40px;
  text-align:center;
  &:hover{
    background: ${(props) => props.theme.primary_color} !important;
    color: white !important;
  }
`;

const OutlinedSecondaryButton = css`
  color: ${(props) => props.theme.secondary_color} !important;
  background: white !important;
  border: 1px solid ${(props) => props.theme.secondary_color} !important ;
`;

const OutlinedThirdButton = css`
  color: ${(props) => props.theme.third_color} !important;
  background: white !important;
  border: 1px solid ${(props) => props.theme.third_color} !important ;
`;

const OutlinedDefaultButton = css`
  color: white !important;
  background: transparent !important; 
  border: none !important;
  font-family: 'Montserrat', sans-serif !important;
  &:hover{
   color: #d9d9d9 !important;
  }
  &:focus{ 
    color: white !important;
    border-bottom: 1px solid white !important ;
  }  
`;

export const ButtonContainer = styled(Button)`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.25px;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  border-radius: 4px; 
  &:disabled {
    opacity: 0.7;
  }
  ${({ btntype }) => {
    if (btntype === "primary") {
      return PrimaryButton;
    }
    if (btntype === "secondary") {
      return SecondaryButton;
    }
    if (btntype === "third") {
      return ThirdButton;
    }
    if (btntype === "fourth") {
      return FourthButton;
    }
    if (btntype === "primaryOutlined") {
      return OutlinedPrimaryButton;
    }
    if (btntype === "secondaryOutlined") {
      return OutlinedSecondaryButton;
    }
    if (btntype === "thirdOutlined") {
      return OutlinedThirdButton;
    }
    if (btntype === "transparent") {
      return OutlinedDefaultButton;
    }
    return DefaultButton;
  }}
`;