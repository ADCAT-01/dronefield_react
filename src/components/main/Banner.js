import { Col, Container, Row, Stack } from "react-bootstrap"
import img from '../../assets/img/dronefield_bg.jpg'


export const Banner = () => {
  return (
    <section className="MainBanner">
      <Container fluid style={{
        height: "100vh",
        backgroundColor: "green",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}>
        <Container fluid="xl">
          {/* <Stack gap={3} className="d-flex align-items-start justify-content-center" style={{ */}
          <Stack gap={3} className="d-flex align-items-start justify-content-center" style={{
            height: "100vh",
            // backgroundColor: "red",
          }}>
            <div style={{
              fontSize:"35px",
              color:"white",
            }}>드론전문 기술 플랫폼</div>
            <div style={{
              // width: "300px",
              // height: "100px",
              fontSize:"125px",
              color:"white",
              // backgroundColor: "yellow",
            }}>드론평야</div>
            <div style={{
              //width: "300px",
              // height: "100px",
              // backgroundColor: "white",
              fontSize:"25px",
              color:"white",
            }}>대충 더 설명할 문구1</div>
            <div className="ms-auto" style={{
              fontSize:"20px",
              color:"white",
            }}>대충 더 설명할 문구2</div>
          </Stack>
        </Container>
      </Container>
    </section>
  )
}


// export const Banner = () => {
//   return (
//       <section className="banner" id="home">
//         <Container>
//           <Row className="align-items-center">
//             <Col xs={12} md={6} xl={7}>
//               <span className="tagline">드론평야</span>
//               <h1>드론평야</h1>
//               <p>Dummy Test</p>
//               <button onClick={() => { console.log('connect') }}>Let's Connect</button>
//             </Col>
//             <Col xs={12} md={6} xl={5}>
//               <img src={""} alt="Hedder Img"></img>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//   )
// }