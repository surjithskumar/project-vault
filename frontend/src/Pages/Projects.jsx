import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ProjectCard from "../Components/ProjectCard";
import { Col, Row } from "react-bootstrap";
import { getAllProjectAPI } from "../services/allAPI";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [searchKey,setSearchKey] = useState("");

  const getAllProjects = async () => {
  const token = sessionStorage.getItem("token");
  // reqHeader
  if (token) {
    const reqHeader = {
      "Content-Type": "application/json", // Correct Content-Type
      "Authorization": `Bearer ${token}`,
    };
    
    // Check if searchKey is defined and not empty
    if (searchKey.trim()) {
      try {
        // API call
        const result = await getAllProjectAPI(reqHeader, encodeURIComponent(searchKey));
        console.log(result);
        if (result.status === 200) {
          setAllProjects(result.data);
        } else {
          console.log(result);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    } else {
      console.log("Search key is empty");
      // Optionally fetch all projects if searchKey is empty
      const result = await getAllProjectAPI(reqHeader, "");
      if (result.status === 200) {
        setAllProjects(result.data);
      }
    }
  }
};


  useEffect(()=>{
    getAllProjects()
  },[searchKey]);

  return (
    <>
      <Header />
      <div className="projects mt-5">
        <h1 className="text-center mb-5">All Projects</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex border w-50 rounded mb-3">
            <input
              onChange={e=>setSearchKey(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Search by technologies"
            />
            <i
              style={{ marginLeft: "-50px" }}
              className="fa-solid fa-magnifying-glass fa-rotate-90"
            ></i>
          </div>
        </div>
      </div>

      <Row className="container-fluid mt-5">
        {allProjects?.length>0?allProjects.map(project=>(
          <Col sm={12} md={6} lg={4}>
          <ProjectCard project={project} />
        </Col>
        )):<p className="text-danger fw-bolder ms-2">Nothing to Display</p>}
      </Row>
    </>
  );
};

export default Projects;
