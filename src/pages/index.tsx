// Gatsby supports TypeScript natively!
import { graphql, Link, PageProps } from "gatsby"
import React from "react"
import { Container } from 'react-bootstrap'
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import imgBackground from '../images/background.png';

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const Banner = styled.div`
	background-image: url(${imgBackground});
	background-repeat: no-repeat;
	background-size: cover;
	height: 420px;
	padding-top: 100px;
`

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />

			<Banner>

				<Container>
					<Bio />
					<p className="mt-3 mb-3" style={{ color: '#fff' }}>
						Tenho mais de 8 anos de experiência em design visual.
						<br />
						Atualmente o foco é criar experiências incriveis  em produtos digitais, gerar melhor experiência aos usuários.
					</p>
				</Container>

			</Banner>

			<Container className="mt-3">

				<div className="row">
					<div className="col-md-6 mt-5 mb-4">
						<b>PROJETOS</b>
					</div>	
				</div>

				{posts.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug
					return (
						<div className="row mt-3" key={node.fields.slug}>
							<div className="col-md-6">
								<h3
									style={{
										marginBottom: 1,
									}}
								>
									<Link style={{ boxShadow: `none` }} to={node.fields.slug}>
										{title}
									</Link>
								</h3>
								<small>{node.frontmatter.date}</small>
							</div>
							<div className="col-md-6">
								<p
									dangerouslySetInnerHTML={{
										__html: node.frontmatter.description || node.excerpt,
									}}
								/>
							</div>
						</div>
					)
				})}

				<div className="mt-4 mb-5 text-center">
					CONSULTAS DE TRABALHO
					<br />
					<a href="mailto:vitor.designer@gmail.com">
						<b>vitor.designer@gmail.com</b>
					</a>
				</div>
			</Container>
				
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
