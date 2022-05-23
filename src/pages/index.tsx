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

const docLink = {
  text: "Books we're curently reading:",
  color: "#8954A8",
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

// data
const links = [
  {
    text: "The Dispossessed",
    url: "https://www.goodreads.com/book/show/13651.The_Dispossessed",
    description:
      "A tall alien from a communist planet visits a capitalist planet to open up their cultures to each other. Anarchy and hijinks ensue!",
    color: "#E95800",
  },
  {
    text: "Dance of The Reptiles",
    url: "https://www.goodreads.com/book/show/17978478-dance-of-the-reptiles",
    description:
      "Stranger than fact stories about animal welfare, polluted rivers, and the broken criminal justice system in Florida.",
    color: "#E95800",
  },
  {
    text: "The Count of Monte Cristo",
    url: "https://www.goodreads.com/book/show/7126.The_Count_of_Monte_Cristo?ac=1&from_search=true&qid=eVwGW707Ih&rank=1",
    description:
      "Everything is going well for Dantes until he is made the fall guy for a Bonapartist conspiracy to protect some powerful people. He comes back decades later with billions and shows them who's boss.",
    color: "#E95800",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>UW Book Club</title>
      <h1 style={headingStyles}>
        Welcome!
        <br />
        <span style={headingAccentStyles}>— this is the UW Book Club </span>
        📚 🤓
      </h1>
      <p style={paragraphStyles}>
        We meet weekly to talk about the books we're reading and hang out.
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <h1
            style={linkStyle}
          >
            {docLink.text}
          </h1>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
