import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { MainNav } from '../constants/navigation';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <Navbar className="App-header" expand="lg" variant="light">
      <Container className="d-flex flex-row justify-content-start">
        <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 164 157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="164" height="157" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_8_9"
                  transform="translate(0 -0.0166004) scale(0.0027248 0.00284628)"
                />
              </pattern>
              <image
                id="image0_8_9"
                width="367"
                height="363"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </Navbar.Brand>
        <Container className="p-0">
          <Row className="g-2">
            <Col md={5}>
              <Form.Label htmlFor="search" visuallyHidden>
                Search Tu Pues
              </Form.Label>

              <Form.Control
                style={{ width: '100%' }}
                placeholder="Search Tu Pues"
                type="text"
                id="search"
                muted
              ></Form.Control>
            </Col>
            <Col md={1}>
              <Button className="w-100" variant="primary">
                Search
              </Button>
            </Col>
            <Col
              md={6}
              className="d-flex flex-row justify-content-end align-items-center"
              style={{ color: '#EEEEEE' }}
            >
              <Link
                to="/login"
                style={{
                  color: 'white',
                  marginRight: '0.5rem',
                  textDecoration: 'none',
                }}
              >
                Login
              </Link>
              or
              <Link
                to="/signup"
                style={{
                  color: 'white',
                  marginLeft: '0.5rem',
                  textDecoration: 'none',
                }}
              >
                Sign up!
              </Link>
            </Col>
          </Row>
          <div className="d-flex align-items-center justify-content-between">
            <Nav>
              {MainNav.map(({ name, path }) => (
                <Nav.Link
                  style={{
                    color:
                      pathname === path || pathname === path + '/'
                        ? 'white'
                        : '#d1d1d1',
                  }}
                  key={name}
                  as={Link}
                  to={path}
                >
                  {name}
                </Nav.Link>
              ))}
            </Nav>
            <Link to="/cart">
              <svg
                width="32"
                height="32"
                fill="#EEEEEE"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
              </svg>
            </Link>
          </div>
        </Container>
      </Container>
    </Navbar>
  );
}
