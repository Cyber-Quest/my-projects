import React from "react"; 

import Header from "../components/header/header.container";
import Body from "../components/body/body.container";
import Footer from "../components/footer/footer.component"; 

import { 
        HomePageStyles,  
        } 
        from "./homepage.styles";

const HomePage = () => {
  return(
   <HomePageStyles id="home"> 
      <Header/> 
      <Body/> 
      <Footer/>
  </HomePageStyles>
  );
};

export default HomePage;
