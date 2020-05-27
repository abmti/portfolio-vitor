import { Link } from "gatsby";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


const Layout = ({ location, title, children }) => {
  
	/*
	const rootPath = `${__PATH_PREFIX__}/`
	let header
  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: 1,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title || 'Home'}
        </Link>
      </h3>
    )
	}
	*/

  return (
    <>

			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="/">VC</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="mailto:vitor.designer@gmail.com">Email</Nav.Link>
							<Link to="/resume" className="nav-link">
								Resume
              </Link>
							<Nav.Link href="https://www.linkedin.com" target="_blank">Linkedin</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>	
			</Navbar>

      {children}

			<div style={{textAlign: 'center'}}>
				<Link to={`/resume`} className="mr-2">
          Resume
        </Link>
				<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
					Linkedin
				</a>
			</div>

      <footer className="mt-3 mb-3 text-center">
        © {new Date().getFullYear()}. Vitor Corrêa - UX/UI Designerrr
      </footer>

    </>
  )
}

export default Layout
