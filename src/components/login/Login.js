import './Login.css';
import { useState } from "react"
import { Container, Form, Row, Col, Stack, Button, Image } from "react-bootstrap";

import logo from '../../assets/img/dronefield_logo.jpg'


// 대강 할일 정리 - 순서대로 해야할듯
// redux 사용법 익히기, 상태관리 하기, 토큰등을 전역에서 사용하기 위함
// fetch로 여기서 직접 호출하지 말고 redux를 사용해서 호출하기 - 디자인부와 기능부를 가능한 분리해보기
// 리액트 라우팅으로 ux 향상 - 페이지프로텍트? 그거로 로그인 했을때만 이용가능한 부분 구현
// 쿠키나 브라우저 스토리지에 토큰 저장해서 자동 로그인 구현
// 양식(폼?)을 지정하여 벗어날 경우 입력이 되지 않게 보안작업


export function LoginPage() {
  const loginFormInit = {
    email: '',
    password: '',
  }

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginClick = function () {
    fetch("http://127.0.0.1:8000/login", {
      method: 'POST',
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({
        email: userEmail,
        password: password,
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
  }

  return (
    <section className="login" id="loginform">
      <Container className="d-flex align-items-center justify-content-center"
        fluid="sm"
        style={{
          height: "100vh",
          // backgroundColor: "red",
        }}>
        <Form>
          <Container
            className="wrapper">
            <Stack gap={4} fluid="true">
              <div style={{ justifyContent: "center" }}>
                <Image src={logo} width="100px" height="100px" />
              </div>
              <Form.Control placeholder="email"
                onChange={(e) => {setUserEmail(e.target.value); console.log(userEmail)}} />
              <Form.Control placeholder="password"
                onChange={(e) => setPassword(e.target.value)} />
              <Button variant='primary' onClick={loginClick} >login</Button>
              <Button variant="link">Register</Button>
            </Stack>
          </Container>
        </Form>
      </Container>
    </section>
  )
}
