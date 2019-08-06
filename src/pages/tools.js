import React from "react"
import Header from "../components/Header"
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


export default () => (
  <div style={{ margin: `2rem auto`, maxWidth: 1000 }}>
    <Header />
    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '45vh' }}>To be coming soon!</h1>
  </div>
)
