import React from "react"
import { Link } from "gatsby"
import AppBar from '@material-ui/core/AppBar'

const linkStyles = {
  color: `#344955`,
  background: `#f5f5f5`,
  textDecoration: `none`
}

const activeStyles = {
  color: `#232F34`,
  fontWeight: `bold`
}

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={ props.to } style={ linkStyles } activeStyle={ activeStyles }>{ props.children }</Link>
  </li>
)

export default () => (
  <AppBar color="default" style={{ height: 64 }}>
    <div style={{ margin: `1rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>StatNLP</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/people/">People</ListLink>
        <ListLink to="/publications/">Publications</ListLink>
        <ListLink to="/tools">Tools</ListLink>
        <ListLink to="/blog">Blog</ListLink>
      </ul>
    </div>
  </AppBar>
)
