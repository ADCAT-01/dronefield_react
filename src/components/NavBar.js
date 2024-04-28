import { Navbar, Container, Nav } from "react-bootstrap"
import { useState, useEffect } from "react"
import logo from '../assets/img/dronefield_logo.jpg'

import './Button_custom'
import { ButtonCustom, ButtonCustom2 } from "./Button_custom";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg"
      className={scrolled ? "scrolled" : ""}
      fixed="top"
      style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" width="60px" height="60px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto felx"> 원래 앱바 배열이 왼쪽으로 쏠림*/}
          <Nav className="flex-grow-1 justify-content-evenly">
            <Nav.Link href="/"
              className={activeLink === "/" ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('/')} >Home</Nav.Link>
            <Nav.Link href="/maincontent"
              className={activeLink === "maincontent" ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('maincontent')} > maincontent</Nav.Link>
            <Nav.Link href="#projects"
              className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')} > Projects</Nav.Link>
          </Nav>
          {/* <span className="navbar-text"> */}
            {/* <div className="social-icon">
              <a href="#"><img src={""} alt=""></img></a>
              <a href="#"><img src={""} alt=""></img></a>
              <a href="#"><img src={""} alt=""></img></a>
            </div> */}
            {/* <Button variant="outline-success" className="vvd" onClick={() => console.log('connect')}>
              <span>Let's Connect</span>
            </Button> */}
            <Nav.Link href="/login">
            <ButtonCustom btn_name="로그인" onFuncClicked={() => { console.log("test1") }}></ButtonCustom>
            </Nav.Link>
            <Nav.Link href="/register">
            <ButtonCustom2 btn_name="회원가입" onFuncClicked={() => { console.log("test2") }}></ButtonCustom2>
            </Nav.Link>
          {/* </span> */}
        </Navbar.Collapse>
      </Container >
    </Navbar >
  );
}