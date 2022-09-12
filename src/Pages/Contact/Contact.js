import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
    <div className="ContactMainContainer" >
        <h2 className="Contact-title">Contact Me</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="user_email" required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" name="subject" required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" cols='30' rows='5' required/>
          <Button variant="info" type="submit" value="Send" className="mt-2">
            Send Message
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Contact;
