import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container style={{padding: '3rem'}}>
      <Row className='justify-content-md-center'>
        <Col sm={8} md={9} lg={11}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer