import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from 'react-bootstrap'

function Resume(props) {
	return (
		<Layout location={props.location}>
      <SEO title="All posts" />
			<Container>
				RESUME
			</Container>
		</Layout>
	)
}

export default Resume
