import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Qué es VGA.jpg";
import projImg2 from "../assets/img/Procesadores para laptop.jpg";
import projImg3 from "../assets/img/Velocidad de la memoria RAM.jpg";
import projImg4 from "../assets/img/Conmutador de voltaje.jpg";
import projImg5 from "../assets/img/Fallas de un microprocesador.jpg";
import projImg6 from "../assets/img/Tarjeta gráfica integrada vs dedicada.jpg";
import projImg7 from "../assets/img/Qué es BIOS.jpg";
import projImg8 from "../assets/img/Memorias RAM para laptop.jpg";
import projImg9 from "../assets/img/Significado de NVIDIA Ti.jpg";
import projImg10 from "../assets/img/Fuentes de alimentación.jpg";
import projImg11 from "../assets/img/Memorias RAM.jpg";
import projImg12 from "../assets/img/Microprocesadores.jpg";
import projImg13 from "../assets/img/Monitores.jpg";
import projImg14 from "../assets/img/Placas bases.jpg";
import projImg15 from "../assets/img/Unidades de almacenamiento.jpg";
import projImg16 from "../assets/img/Guía de Compra. Fuentes de alimentación.jpg";
import projImg17 from "../assets/img/Guía de Compra. Memorias RAM.jpg";
import projImg18 from "../assets/img/Guía de Compra. Microprocesadores.jpg";
import projImg19 from "../assets/img/Guía de Compra. Monitores.jpg";
import projImg20 from "../assets/img/Guía de Compra. Placas Bases.jpg";
import projImg21 from "../assets/img/Guía de Compra. Unidades de almacenamiento.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "¿Qué es VGA?",
      description: "Monitores",
      imgUrl: projImg1,
    },
    {
      title: "Guía de los procesadores para laptop",
      description: "Microprocesadores",
      imgUrl: projImg2,
    },
    {
      title: "Velocidad de la memoria RAM",
      description: "Memorias RAM",
      imgUrl: projImg3,
    },
    {
      title: "Conmutador de voltaje de una fuente",
      description: "Fuentes de alimentación",
      imgUrl: projImg4,
    },
    {
      title: "Fallas y soluciones de los procesadores",
      description: "Microprocesadores",
      imgUrl: projImg5,
    },
    {
      title: "Las tarjetas gráficas integradas vs dedicadas",
      description: "Tarjetas gráficas",
      imgUrl: projImg6,
    },
    {
      title: "¿Qué es BIOS?",
      description: "Placas bases",
      imgUrl: projImg7,
    },
    {
      title: "Guía de las memorias RAM para laptop",
      description: "Memorias RAM",
      imgUrl: projImg8,
    },
    {
      title: "¿Cuál es el significado de NVIDIA Ti?",
      description: "Tarjetas gráficas",
      imgUrl: projImg9,
    },
  ];

  const projects2 = [
    {
      title: "Fuentes de alimentación",
      description: "Guía de Hardware",
      imgUrl: projImg10,
    },
    {
      title: "Memorias RAM",
      description: "Guía de Hardware",
      imgUrl: projImg11,
    },
    {
      title: "Microprocesadores",
      description: "Guía de Hardware",
      imgUrl: projImg12,
    },
    {
      title: "Monitores",
      description: "Guía de Hardware",
      imgUrl: projImg13,
    },
    {
      title: "Placas bases",
      description: "Guía de Hardware",
      imgUrl: projImg14,
    },
    {
      title: "Unidades de almacenamiento",
      description: "Guía de Hardware",
      imgUrl: projImg15,
    },
  ];

  const projects3 = [
    {
      title: "Fuentes de alimentación",
      description: "Guía de Compra",
      imgUrl: projImg16,
    },
    {
      title: "Memorias RAM",
      description: "Guía de Compra",
      imgUrl: projImg17,
    },
    {
      title: "Microprocesadores",
      description: "Guía de Compra",
      imgUrl: projImg18,
    },
    {
      title: "Monitores",
      description: "Guía de Compra",
      imgUrl: projImg19,
    },
    {
      title: "Placas bases",
      description: "Guía de Compra",
      imgUrl: projImg20,
    },
    {
      title: "Unidades de almacenamiento",
      description: "Guía de Compra",
      imgUrl: projImg21,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Artículos Recomendados</h2>
                <p>En esta sección podrás analizar los mejores artículos, guías de Hardware y Guías de Compra más populares</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Artículos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Guías PC</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Guías de Compra</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}