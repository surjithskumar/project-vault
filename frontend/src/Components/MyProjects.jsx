import React from 'react'
import AddProject from '../Components/AddProject'

const MyProjects = () => {
  return (
    <>
      <div className="card shadow mt-5">
        <div className="container-fluid p-3">
          <h1 className='fw-bolder text-dark'>My-Projects</h1>
        </div>
        <div className="ms-auto">
          <AddProject/>
        </div>
        <div className="mt-4 border p-3 d-flex">
          <h2 className='text-danger fw-bolder'>Project Title</h2>
        </div>
          <div className="ms-auto d-flex align-items-center">
            <a className='me-3 btn text-dark'><i class="fa-regular fa-pen-to-square"></i></a>
            <a className='me-3 btn text-dark'><i class="fa-brands fa-github"></i></a>
            <button className='btn text-dark'><i class="fa-solid fa-trash"></i></button>
          </div>
      </div>
    </>
  )
}

export default MyProjects
