import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../services/allAPI';

const AddProject = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setProjectData({
      title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
    })
    setPreview("");
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const [projectData, setProjectData] = useState({
    title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
  })

  const [preview, setPreview] = useState("")
  const [fileStatus, setFileStatus] = useState(false)

  useEffect(() => {
    if (projectData.projectImage.type === 'image/png' || projectData.projectImage.type === 'image/jpg' || projectData.projectImage.type === 'image/jpeg') {
      console.log("generate url");
      setFileStatus(false)
      setPreview(URL.createObjectURL(projectData.projectImage));
    } else {
      console.log("please upload following formats only : png/jpg/jpeg")
      setFileStatus(true)
      setProjectData({ ...projectData, projectImage: "" })
    }
  }, [projectData.projectImage])

  const handleAddProject = async () => {
    const { title, languages, overview, github, website, projectImage } = projectData
    if (!title || !languages || !overview || !github || !website || !projectImage) {
      toast.info('Please fill missing fields')
    } else {
      // reqBody = formData
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("projectImage", projectImage)

      const token = sessionStorage.getItem("token")
      //reqHeader
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        //apicall
        try {
          const result = await addProjectAPI(reqBody,reqHeader);
          if(result.status==200){
            toast.success("Project uploaded");
            handleClose()
          }else{
            toast.warning(result.response.data);
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='me-2 rounded'>Add-Project</Button>

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
                <img height={"200px"} width={"100%"} src={preview ? preview : 'https://media.istockphoto.com/id/1441026821/vector/no-picture-available-placeholder-thumbnail-icon-illustration.jpg?s=612x612&w=0&k=20&c=7K9T9bguFyJyKOTvPkdoTWZYRWA3zGvx_xQI53BT0wg='} alt='' />
              </label>
              {fileStatus && <div className="mb-3 text-danger">please upload following formats only : png/jpg/jpeg</div>}
            </div>
            <div className="col-lg-6">
              <Form>
                <div className="mb-2">
                  <FloatingLabel controlId="floatingtitle" label="Project-Title">
                    <Form.Control type="text" placeholder="Enter your Project title" onChange={e => setProjectData({ ...projectData, title: e.target.value })} />
                  </FloatingLabel>
                </div>
                <div className="mb-2">
                  <FloatingLabel controlId="floatinglanguage" label="Language Used">
                    <Form.Control type="text" placeholder="Enter your Project language" onChange={e => setProjectData({ ...projectData, languages: e.target.value })} />
                  </FloatingLabel>
                </div>
                <div className="mb-2">
                  <FloatingLabel controlId="floatingOverview" label="Project Overview">
                    <Form.Control type="text" placeholder="Overview" onChange={e => setProjectData({ ...projectData, overview: e.target.value })} />
                  </FloatingLabel>
                </div>
                <div className="mb-2">
                  <FloatingLabel controlId="floatinggit" label="Github-Link">
                    <Form.Control type="text" placeholder="Github" onChange={e => setProjectData({ ...projectData, github: e.target.value })} />
                  </FloatingLabel>
                </div>
                <div className="mb-2">
                  <FloatingLabel controlId="floatingweb" label="website-Link">
                    <Form.Control type="text" placeholder="website link" onChange={e => setProjectData({ ...projectData, website: e.target.value })} />
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
          <Button variant="primary" onClick={handleAddProject}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  )
}

export default AddProject
