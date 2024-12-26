import React, { useEffect, useState } from "react";
import AddProject from "../Components/AddProject";
import { getUserProjectAPI } from "../services/allAPI";

const MyProjects = () => {
  const [allProjects, setAllProjects] = useState([]);

  const getAllProjects = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      // API call
      const result = await getUserProjectAPI(reqHeader);
      console.log(result);
      if (result.status === 200) {
        setAllProjects(result.data);
      } else {
        console.log(result);
      }
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  console.log(allProjects);

  return (
    <>
      <div className="card shadow mt-5">
        <div className="container-fluid p-3">
          <h1 className="fw-bolder text-dark">My Projects</h1>
        </div>
        <div className="ms-auto">
          <AddProject />
        </div>
        {allProjects?.length > 0 ? (
          allProjects.map((project) => (
            <div className="container-fluid d-flex" key={project.id}>
              <div className="mt-4 border p-3 d-flex">
                <h2 className="text-danger fw-bolder">{project?.title}</h2>
              </div>
              <div className="ms-auto d-flex align-items-center">
                <a className="me-3 btn text-dark">
                  <i className="fa-regular fa-pen-to-square"></i>
                </a>
                <a
                  className="me-3 btn text-dark"
                  href={project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <button className="btn text-dark">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No projects available.</p>
        )}
      </div>
    </>
  );
};

export default MyProjects;