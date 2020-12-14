import styled from "styled-components"; 

export const HeaderStyles = styled.div`   
width:100%;
height:60vh;
background:linear-gradient(to top, rgba(128, 128, 128, .6), rgba(51, 51, 51, .6)),${({ image }) => `url(${image})`}; 
background-size: cover;
background-repeat: no-repeat; 
border-bottom: 2px solid rgb(115, 115, 115, .8);
-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) inset;
-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) inset;
box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)inset;
`; 

export const Navbar = styled.div`
display:flex;
justify-content:space-between;
align-items:center; 
padding: 0px 10%;
width:100%; 
max-width: 1200px;
height:70px;
margin:auto;
`; 

export const Logo = styled.div`
font-size:25px;
font-weight:900;
color:white;
cursor: pointer;
&:hover{
    opacity:0.7;
}
`

export const NavbarItem = styled.div`
font-size:1rem;
font-weight:400;
color:white;
cursor: pointer;
&:hover{
    opacity:0.7;
}
`
export const ContentHeader = styled.div`
display: flex;
align-items:center;
justify-content:center; 
flex-flow:column;
width: 100%;
gap:15px;
h1{
    text-align:center;
    font-size: 2.5rem;
    line-height: 15px;
}
p{
    color:#d9d9d9 !important;
}
${() => `min-height: calc(60vh - 70px);`}
@media only screen and (max-width: 800px) { 
    h1{         
        line-height: normal;
    }
}
`