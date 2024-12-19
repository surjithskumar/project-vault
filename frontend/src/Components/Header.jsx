import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
            <i className='fa-solid fa-list-check me-2'></i>
            Project-Fair
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
