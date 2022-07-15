import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}


const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const githubIssuesLink = "https://github.com/uwengnews/uwengnews.github.io/issues";

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>ENGnews</title>
      <h1 style={headingStyles}>
        ENGnews
      </h1>
      <h3>UWaterloo's avant-garde, stream-of-conciousness engineering student paper</h3>
      <p style={paragraphStyles}>
        We're starting in the Fall term of 2022, first issue out on September 12
      </p>
      <p style={paragraphStyles}>
        We will finally break the chokehold mathNEWS has on how nerds get high quality information on the University of Waterloo campus
      </p>
      <p style={paragraphStyles}>
        Have ideas or want to join? Check out our <a href={githubIssuesLink}>github issues page</a>, or message Jerry Lu (JerryLu#1659) on Discord
      </p>
    </main>
  )
}

export default IndexPage
