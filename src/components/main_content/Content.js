import './Content.css';
import { useState } from "react"
import { Container, Form, Row, Col, Stack, Button, Image } from "react-bootstrap";

import logo from '../../assets/img/dronefield_logo.jpg'

export function ContentPage() {

    return (
        <section className="maincontent" id="contents">
            <Col>
                <div style={{width:"100px", height:"300px"}} />
                안녕하세요! 메인 콘텐츠 페이지 입니다
            </Col>
        </section>
    )
}
