import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container style={{padding: '3rem'}}>
      <Row className='justify-content-center'>
        <Col xs={12} sm={12} md={10} lg={12} xl={10}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer