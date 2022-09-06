import React from "react";
import "./Footer.css";
import { Container, Nav, Navbar, Image } from "react-bootstrap";

function Footer() {
  return (
    <div className="">
      <Nav bgcolor="light" className="fixed-bottom footer">
        <div
          className="text-center p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="links text-dark" href="https://github.com/abstrack5" target="_blank">
            Armon Ahmadi
          </a>
        </div>
      </Nav>
    </div>
  );
}

export default Footer;
