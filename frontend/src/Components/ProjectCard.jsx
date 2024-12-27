import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import { server_url } from '../services/serverurl'


const ProjectCard = ({project}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '18rem' }} className='shadow rounded mt-5'>
        <Card.Img variant="top" src={`${server_url}/uploads/${project?.projectImage}`} width={"100%"} onClick={handleShow} />
        <Card.Body>
          <Card.Title>{project?.title}</Card.Title>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
            <img src={`${server_url}/uploads/${project?.projectImage}`} width={"100%"}/>
            </Col>
            <Col>
            <h2 className='fw-bolder text-dark'>{project?.title}</h2>
            <h3><span className='text-warning'>Languages Used </span>:{project?.languages}</h3>
            <p className='text-info'><span className='text-success'>Overview </span>: {project?.overview}</p>
            </Col>
          </Row>
          <div className='mt-2'>
            <a href={project?.github} target='_blank' className='me-3 btn text-dark'><i class='fa-brands fa-github fa-2x'></i></a>
            <a href={project?.website} target='_blank' className='me-3 btn text-dark'><i class='fa-solid fa-link fa-2x'></i></a>
          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default ProjectCard