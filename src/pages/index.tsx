import * as React from "react"
import issue from "../issues/issue.pdf";

// styles
const pageStyles = {
  color: "#232129",
  padding: 32,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 5,
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

const iframeStyle = {
  width: '100%',
  height: 750,

}

const gridContainer = {
  width: '100%',
  overflow: 'hidden',
}

const gridElem = {
  width: '45%',
  float: 'left',
  padding: 20,
}

const githubIssuesLink = "https://github.com/uwengnews/uwengnews.github.io/issues";
const articleSubmissionLink = "https://forms.gle/QMmLBQv6YemSdCfC6";
const coverImageSubmissionLInk = "https://docs.google.com/forms/d/e/1FAIpQLSdUmb3xwXgFfQCb-2lgpZLQbOgPh1n7e3_Eh_XIywF8C5WLxQ/viewform";

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>ENGnews</title>
      <h1 style={headingStyles}>
        ENGnews
      </h1>
      <div style={gridContainer}>
        <div style={gridElem}>
          <h2>Issue 0000 0001</h2>
          <iframe id="issuePdf" title="Issue 0000 0001" src={issue} style={iframeStyle}></iframe>
        </div>
        <div style={gridElem}>
          <h3>The Avant-Garde Stream-of-Conciousness Laurieh Engeneerneng Studet Paper</h3>
          <p style={paragraphStyles}>
            Approved by Lourier Engeneering.
          </p>
          <p style={paragraphStyles}>
            Pick up a physical copy in PAC, SLC, QNC, RCH or E5. Next issue out on October 3rd.
          </p>
          <p style={paragraphStyles}>
            Have ideas or want to join? Submit articles <a href={articleSubmissionLink}>here</a>, cover images <a href={articleSubmissionLink}>here</a> or create a <a href={githubIssuesLink}>github issue</a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
