import React, { useState } from "react";  
import imgUrl from "../../assests/background.jpg";
 
import LoginModal from "../login/login.container";
import NewPrjectModal from "../newProject/newProject.container";

import Button from "core/components/button/button.component"; 

import {
  HeaderStyles,
  Navbar, 
  Logo,
  NavbarItem,
  ContentHeader
} from "./header.styles";

const Header = ({
  logoutUser = () => null,
  user = false
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleProject, setIsModalVisibleProject] = useState(false);
  return(
  <HeaderStyles image={imgUrl}> 
    <LoginModal visibleModal={isModalVisible} setIsModalVisible={setIsModalVisible} /> 
    <NewPrjectModal visibleModal={isModalVisibleProject} setIsModalVisible={setIsModalVisibleProject} /> 
    <Navbar> 
      <Logo>PROJECTS</Logo> 
      {user.is_on ?   
        <div style={{display:"flex", gap:"30px"}}>
          <NavbarItem onClick={ async () =>{
            setIsModalVisibleProject(true);
          }}>
            NEW PROJECT
          </NavbarItem>
          <NavbarItem onClick={ async () =>{
            await logoutUser(); 
          }}>
            LOGOUT
          </NavbarItem>
        </div>
    
      :  
        <NavbarItem onClick={() =>{
          setIsModalVisible(true)
        }}>
          LOGIN
        </NavbarItem>
      }
    
    </Navbar>
    <ContentHeader>
      <h1>WELCOME TO MY PROJECTS</h1>
      <p>Click to view</p>
      <Button btntype="primary">View projects</Button>
    </ContentHeader>
  </HeaderStyles>
  );
};

export default Header;
