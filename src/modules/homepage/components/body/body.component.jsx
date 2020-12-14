import React, { useState, useCallback, useEffect } from "react"; 

import {
    BodyStyles,
    Container,
    Project
        } from "./body.styles";

const Body = ({
    getProjects = () => null,
    projects = {}
}) =>{   
    const [state, setState] = useState({
        data: [],
    });
    
    const getProjectsCallback = useCallback(() => {
        getProjects();
    }, [getProjects]);

    useEffect(() => {
       getProjectsCallback();
    }, [getProjectsCallback]);

    useEffect(() => {
        if (!projects.loading) setState({ data: projects.items })  
    }, [setState, projects]);

    console.log(state)
    return(
        <BodyStyles>
            <Container>
                <div style={{display:"flex", flexFlow:"column", alignItems:"center", width:"100%"}}>
                    <h1>my most recent projects</h1> 
                    <p>See all objects created over time</p> 
                    <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", maxWidth:"900px", width:"100%", gap:"30px", marginTop:"30px"}}> 
                    {!projects.loading ? state.data.map((item) =>{
                        return <Project image={item.link} href={`https://${item.name}.netlify.app`} target="_blank">
                            <div/>
                            <h2>{item.title}</h2>
                        </Project>
                    }): null}
                        
                    </div>
                </div>
            </Container>
        </BodyStyles>
    )
}

export default Body;