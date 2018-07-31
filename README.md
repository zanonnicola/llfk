# gatsby-starter-default
The default Gatsby starter.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
npm run develop
```

```
{
  # allDataYaml {
  #   edges {
  #     node {
  #       person {
  #         name
  #         title
  #       }
  #     }
  #   }
  # }
  # allMarkdownRemark(limit: 100, filter: {frontmatter: {path: {regex: "/(workshops|nosateliers)/[a-z]/i"}}}) {
  #   edges {
  #     node {
  #       frontmatter {
  #         path
  #         title
  #       }
  #     }
  #   }
  # }
  allMarkdownRemark(limit: 100, filter: {frontmatter: {path: {regex: "/^(?!/blog/)/"}}}) {
    edges {
      node {
        excerpt(pruneLength: 180)
        id
        
        frontmatter {

          path
          title
          subTitle
        }
      }
    }
  }
  
# }
# site {
#       siteMetadata {
#         title_fr
#         description_fr
#         title_en
#         description_en
#       }
# }
}

```
