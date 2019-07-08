import React from "react"
import Header from "../components/Header"
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


export default () => (
  <div style={{ margin: `5rem auto`, maxWidth: 1000 }}>
    <Header />
    <h1>Software</h1>
    <h1>Datasets</h1>
  </div>
)
