import React, { useContext, useEffect, useState } from "react";
import AddProject from "../Components/AddProject";
import { deleteProjectAPI, getUserProjectAPI } from "../services/allAPI";
import { addProjectResponseContext, editProjectResponseContext } from "../ContextAPI/ContextShare";
import EditProject from "./EditProject";
import { toast } from "react-toastify";

const MyProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext);
   const {editProjectResponse, setEditProjectResponse} = useContext(editProjectResponseContext);

  const getAllUserProjects = async () => {
    const token = sessionStorage.getItem("token");
    //reqHeader
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

  const handleDeleteProject= async (pid)=>{
    const token = sessionStorage.getItem("token");
    //reqHeader
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      //api call
      try {
        const result = await deleteProjectAPI(pid,reqHeader)
        if(result.status===200){
          toast.success("Project deleted successfully");
          getAllUserProjects();
        }else{
          toast.warning(result.response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    getAllUserProjects();
  }, [addProjectResponse,editProjectResponse]);

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
                <EditProject project={project} />
                <a
                  className="me-3 btn text-dark"
                  href={project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <button onClick={()=>handleDeleteProject(project?._id)} className="btn text-dark">
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
