import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function header() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home" className='text-danger fw-bolder'>
            <img
              alt=""
              src="https://i.pinimg.com/originals/14/bd/f7/14bdf7aa1794bc0a9965bbff73deefe2.gif"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            Counter Application
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default header


