import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

const Profile = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{marginTop:'50px'}}>
        <div className='card shadow mt-5 p-5 me-2'>
          <div className='d-flex justify-content-between'>
            <h1>Profile</h1>
            <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class='fa-solid fa-angle-down'></i></button>
          </div>
          
          <Collapse in={open}>
          <div className='row justify-content-center p-5'>
            <label>
              <input type="file" style={{display:'none'}}/>
              <img width={'70%'} height={'200px'} src='https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'/>
            </label>
            <div className="mt-5">
              <input type="text" placeholder='Github Link' className='formm-control'/>
              <br/>
              <input type="text" placeholder='Github Link' className='formm-control'/>
              <div className="d-grid mt-5">
                <button className='btn btn-warning'>Update</button>
              </div>
            </div>
          </div>
          </Collapse>
        </div>
      </div>
    </>
  )
}

export default Profile