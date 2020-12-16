import React, { useState, useCallback, useEffect } from "react"; 
import { Empty, Pagination } from 'antd';

import {
    BodyStyles,
    Container,
    Project
        } from "./body.styles";

const Body = ({
    getProjects = () => null,
    projects
}) =>{   
    const [state, setState] = useState({
        data: [],
    }); 
 
    const [pagination, setPagination] = useState({
        current: 1,
        numPaginationBegin: 0,
        numPaginationEnd: 6, 
        pageSize: 6
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
     
    const onChangePagination = (currentPage) =>{  
        if(currentPage > pagination.current)
            setPagination({
                ...pagination,
                current: currentPage,
                numPaginationBegin: pagination.numPaginationEnd,
                numPaginationEnd: pagination.numPaginationEnd + pagination.pageSize,
            })
        else
            setPagination({
                ...pagination,
                current: currentPage,
                numPaginationBegin: pagination.numPaginationBegin - pagination.pageSize,
                numPaginationEnd: pagination.numPaginationEnd - pagination.pageSize
            })
    }

    return(
        <BodyStyles>
            <Container id="projects">
                <div style={{display:"flex", flexFlow:"column", alignItems:"center", width:"100%", minHeight:700}}>
                    <h1>my most recent projects</h1> 
                    <p>See all objects created over time</p> 
                    <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", maxWidth:"900px", width:"100%", gap:"30px", marginTop:"30px"}}> 
                    {!projects.loading  ? 
                        state.data.length > 0 ?
                            state.data.slice(pagination.numPaginationBegin, pagination.numPaginationEnd).map((item, index) =>{
                                return (
                                <Project key={`${index}`} image={item.link} href={`https://${item.name}.netlify.app`} target="_blank">
                                    <div/>
                                    <h2>{item.title}</h2>
                                </Project>)
                            })
                        :
                        <Empty/>
                    : null}
                        
                    </div>
                </div>
                <Pagination defaultCurrent={1}  current={pagination.current} total={ state.data.length} defaultPageSize={6} pageSize={6} onChange={onChangePagination} style={{marginTop:"50px" }} />
            </Container>
        </BodyStyles>
    )
}

export default Body;