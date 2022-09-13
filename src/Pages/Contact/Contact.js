import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vgygfte",
        "template_4i1fwqu",
        form.current,
        "Q8D8psdNnH8aiuQ9x"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="ContactMainContainer">
      <h1 className="Contact-title mb-3"> &lt;Contact Me /&gt;</h1>
      <Form ref={form} onSubmit={sendEmail} className="ContactForm">
        <Row className="justify-content-md-center mb-3">
          <Form.Group className="mb-3" as={Col} md="4" lg="3" xl="3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="user_name" placeholder="Full Name" required />
          </Form.Group>
          <Form.Group className="" as={Col} md="4" lg="3" xl="3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="user_email" placeholder="name@email.com" required />
          </Form.Group>
        </Row>
        <Row className="justify-content-md-center mb-3">
        <Form.Group className="mb-3" as={Col} md="8" lg="6" xl="6">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" name="subject" placeholder="Subject" />
        </Form.Group>
        </Row>
        <Row className="justify-content-md-center mb-3">
        <Form.Group className="mb-3" as={Col} md="8" lg="6" xl="6">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            cols="30"
            rows="5"
            placeholder="Your message here..."
            required
          />
          <Button variant="info" type="submit" value="Send" className="mt-3">
            Send Message
          </Button>
        </Form.Group>
        </Row>
      </Form>
    </section>
  );
}

export default Contact;
