import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import pcard from '../assets/images/pcard.jpg'

const ProjectCard = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '18rem' }} className='shadow rounded mt-5'>
        <Card.Img variant="top" src={pcard} width={"100%"} onClick={handleShow} />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
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
            <img src={pcard} width={"100%"}/>
            </Col>
            <Col>
            <h2 className='fw-bolder text-dark'>Projject Title</h2>
            <h3><span className='text-warning'>Languages Used </span>: React</h3>
            <p className='text-info'><span className='text-success'>Overview </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias recusandae? Corporis iure voluptas, totam porro, ea natus sapiente ipsam rem repudiandae, ab ut. Totam neque pariatur sunt saepe aut.</p>
            </Col>
          </Row>
          <div className='mt-2'>
            <a href="" target='_blank' className='me-3 btn text-dark'><i class='fa-brands fa-github fa-2x'></i></a>
            <a href="" target='_blank' className='me-3 btn text-dark'><i class='fa-solid fa-link fa-2x'></i></a>
          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default ProjectCard