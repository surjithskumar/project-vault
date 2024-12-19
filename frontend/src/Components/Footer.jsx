import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <>
      <MDBFooter className='text-center text-lg-left bg-success'>
        <MDBContainer className='p-4 pb-0'>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size='auto' className='mb-4 mb-md-0'>
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                <MDBInput type='text' id='form5Example2' label='Email address' />
              </MDBCol>

              <MDBCol size='auto' className='mb-4 mb-md-0'>
                <MDBBtn>Subscribe</MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBContainer>

        <div className='text-center p-3 text-white bg-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-white' href=''>
            Project-Fair.com
          </a>
        </div>
      </MDBFooter>
    </>
  )
}

export default Footer
