import React, { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import titleImage from '../assets/images/img1-home.gif';
import ProjectCard from '../Components/ProjectCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectAPI } from '../services/allAPI';

const Home = () => {

  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const navigate = useNavigate();
  const [allProjects,setAllProjects]=useState([]);

  useEffect(()=>{
    getHomeProjects();
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  },[navigate]);

  const handleProjectsPage=()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }else{
      toast.warning("Please login to explore more projects...");
    }
  }

  const getHomeProjects=async()=>{
    // api call
    const result = await getHomeProjectAPI();
    console.log(result);
    if(result.status == 200){
      setAllProjects(result.data);
    }else{
      console.log(result);
    }
  }
  console.log(allProjects);

  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid bg-info rounded py-5">
        <Container>
          <Row className="align-items-center g-4">
            <Col xs={12} md={6}>
              <h1 className="display-4 fw-bold text-light mt-3">
                <i className="fa-solid fa-list-check me-2"></i>Project-Fair
              </h1>
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa repellendus, necessitatibus voluptatibus veritatis itaque reprehenderit beatae vitae similique dicta minus ullam, assumenda illum. Dolorem tenetur quas maiores ipsam saepe.
              </p>
              { isLoggedIn ? 
                <Link to={'/dashboard'} className="btn btn-dark mt-3"> Manage Your Projects </Link> :
                <Link to={'/login'} className="btn btn-dark mt-3"> Start to Explore </Link>
              }
            </Col>
            <Col xs={12} md={6} className="text-center">
              <img
                src={titleImage}
                className="img-fluid"
                alt="Title"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* All Projects Section */}
      <div className="allProjects mt-5">
        <h1 className="text-center text-primary fw-bolder">
          Explore Your Projects
        </h1>
        <div className="container overflow-auto py-4">
          <marquee scrollAmount={15}>
            <Row className="g-4">
              {
                allProjects.length>0?allProjects.map(project=>(
                  <Col sm={12} md={6} lg={4}>
                    <ProjectCard project={project}/>
                  </Col>
                )) : null
              }
            </Row>
          </marquee>
        </div>
      </div>

      <div className="text-center">
        <p className='btn' onClick={handleProjectsPage}>View More Projects</p>
      </div>
      <ToastContainer />

    </>
  );
};

export default Home;