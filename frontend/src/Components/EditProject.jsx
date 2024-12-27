import React, { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { server_url } from '../services/serverurl';

function EditProject({project}) {

    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [projectData,setProjectData] = useState({id:project?._id,title:project?.title,languages:project?.languages,overview:project?.overview,github:project?.github,website:project?.website,projectImage:""});

  return (
    <div>
      <a className="me-3 btn text-dark" onClick={handleShow} ><i className="fa-regular fa-pen-to-square"></i></a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label>
              <input type="file" style={{ display: "none" }} onChange={e => setProjectData({ ...projectData, projectImage: e.target.files[0] })} />
                <img height={"200px"} width={"100%"} src={`${server_url}/uploads/${project?.projectImage}`} alt='' />
              </label>
            </div>
            <div className="col-lg-6">
              <Form>
                <div className="mb-2">
                  <FloatingLabel controlId="floatingtitle" label="Project-Title">
                    <Form.Control type="text" placeholder="Enter your Project title" value={projectData?.title}/>
                  </FloatingLabel>
                </div>
                <div className="mb-2">
                  <FloatingLabel controlId="floatinglanguage" label="Language Used">
                    <Form.Control type="text" placeholder="Enter your Project language" value={projectData?.languages}/>
                  </FloatingLabel>
                </div>
                <div className="mb-2">
                  <FloatingLabel controlId="floatingOverview" label="Project Overview">
                    <Form.Control type="text" placeholder="Overview" value={projectData?.overview} />
                  </FloatingLabel>
                </div>
                <div className="mb-2">
                  <FloatingLabel controlId="floatinggit" label="Github-Link">
                    <Form.Control type="text" placeholder="Github" value={projectData?.github} />
                  </FloatingLabel>
                </div>
                <div className="mb-2">
                  <FloatingLabel controlId="floatingweb" label="website-Link">
                    <Form.Control type="text" placeholder="website link" value={projectData?.website} />
                  </FloatingLabel>
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" >Upload</Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default EditProject
