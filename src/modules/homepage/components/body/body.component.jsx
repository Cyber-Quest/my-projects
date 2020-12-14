import React, { useState, useCallback, useEffect } from "react";
import imgUrl from "../../assests/background.jpg";

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
        if (!projects.loading) {setState({ data: projects.items })
            console.log("STATW", projects)
        };
        console.log(state)
    }, [setState, projects, state]);

    return(
        <BodyStyles>
            <Container>
                <div style={{display:"flex", flexFlow:"column", alignItems:"center", width:"100%"}}>
                    <h1>my most recent projects</h1> 
                    <p>See all objects created over time</p> 
                    <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", maxWidth:"900px", width:"100%", gap:"30px", marginTop:"30px"}}> 
                        <Project image={imgUrl} href="https://google.com">
                            <div/>
                            <h2>Our test</h2>
                        </Project>
                         <Project image={imgUrl}>
                            <div/>
                            <h2>Our test</h2>
                        </Project>
                         <Project image={imgUrl}>
                            <div/>
                            <h2>Our test</h2>
                        </Project>
                         <Project image={imgUrl}>
                            <div/>
                            <h2>Our test</h2>
                        </Project>
                         <Project image={imgUrl}>
                            <div/>
                            <h2>Our test</h2>
                        </Project>
                         <Project image={imgUrl}>
                            <div/>
                            <h2>Our test</h2>
                        </Project>
                         <Project image={imgUrl}>
                            <div/>
                            <h2>Our test</h2>
                        </Project>
                         <Project image={imgUrl}>
                            <div/>
                            <h2>Our test</h2>
                        </Project>
                        
                    </div>
                </div>
            </Container>
        </BodyStyles>
    )
}

export default Body;