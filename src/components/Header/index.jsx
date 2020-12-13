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
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, display: "flex", flexDirection: "row" }}>
        <img src={require('../../assets/statnlp_logo.svg')} style={{ marginTop: -30, marginLeft: -25 }}/>
        <h3 style={{ marginTop: -3, marginLeft: -20}}>StatNLP</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, marginTop: -100 }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/people/">People</ListLink>
        <ListLink to="/publications/">Publications</ListLink>
        <ListLink to="/resources/">Resources</ListLink>
      </ul>
    </div>
  </AppBar>
)
