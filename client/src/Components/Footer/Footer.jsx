import React from 'react';
import './Footer.css';
import '../Footer/Footer.css';
// import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import logo from '../../assets/evangadi-logo-footer.png';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
function Footer() {
  return (
    <>
      <footer className="footer-container">
        <Container>
          <Row>
            <Col sm={12} md={4} className="my-3">
              <Row>
                <Col sm={12}>
                  <img src={logo} alt="" />
                </Col>
                <Row
                  style={{
                    width: '70%',
                    margin: '30px 0',
                    fontSize: '25px',
                  }}
                >
                  <Col sm={4}>
                    <a
                      href="https://www.facebook.com/EthiopiansNetwork"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook text-white"></i>
                    </a>
                  </Col>

                  <Col sm={4}>
                    <a
                      href="https://www.instagram.com/evangaditech/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram text-white"></i>
                    </a>
                  </Col>
                  <Col sm={4}>
                    <a
                      href="https://www.youtube.com/c/weareethiopians"
                      target="_blank"
                    >
                      <i className="fa-brands fa-youtube text-white"></i>
                    </a>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col sm={12} md={4} className="my-3">
              <h5 className="text-white">Useful Link</h5>
              <ul
                style={{
                  listStyle: 'none',
                  marginLeft: '-25px',
                  lineHeight: '30px',
                }}
              >
                <li>
                  <a href="https://www.evangadi.com/explained/">How it works</a>
                </li>
                <li>
                  <a href="https://www.evangadi.com/legal/terms/">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="https://www.evangadi.com/legal/privacy/">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4} className="my-3">
              <h5 className="text-white">Contact Info </h5>

              <ul
                style={{
                  listStyle: 'none',
                  marginLeft: '-25px',
                  lineHeight: '30px',
                }}
              >
                <li>
                  <a href="">Evangadi Networks</a>
                </li>
                <li>
                  <a href="">contact@test.com</a>
                </li>
                <li>
                  <a href="">+251-97-071-4410</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
