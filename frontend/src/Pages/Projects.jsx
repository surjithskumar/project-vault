import React, { useState } from "react";
import Header from "../Components/Header";
import ProjectCard from "../Components/ProjectCard";
import { Col, Row } from "react-bootstrap";
import { getAllProjectAPI } from "../services/allAPI";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const getAllProjects = async () => {
    const token = sessionStorage.getItem("token");
    //reqHeader
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      //api call
      const result = await getAllProjectAPI(reqHeader);
      console.log(result);
      if (result.status == 200) {
        setAllProjects(result.data);
      } else {
        console.log(result);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="projects mt-5">
        <h1 className="text-center mb-5">All Projects</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex border w-50 rounded mb-3">
            <input
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
        {allProjects?.length > 0 ? (
          allProjects.map((project) => (
            <Col sm={12} md={6} lg={4}>
              <ProjectCard project={project} />
            </Col>
          ))
        ) : (
          <p className="text-danger fw-bolder ms-2">Nothing to Display</p>
        )}
      </Row>
    </>
  );
};

export default Projects;
