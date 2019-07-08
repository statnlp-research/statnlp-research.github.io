import React from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'

export default (props) => (
  <Card style={{ width: "100%", marginBottom: "15px", padding: "10px", minWidth: "1000px" }}>
    <CardHeader
      title={props.name}
      subheader={props.authors}
    />
    <CardActions>
      {
        props.paper === "" ?
        <Button variant="contained" style={{ background: "#CED9E0", color: "#ffff", textShadow: "none"}} disabled>
          Download Paper
          <FontAwesomeIcon icon={faDownload} style={{ marginLeft: "10px" }}/>
        </Button>
        :
        <Button variant="contained" style={{ background: "#232F34", color: "#ffff", textShadow: "none"}} href={props.paper} target="_blank" rel="noopener">
          Download Paper
          <FontAwesomeIcon icon={faDownload} style={{ marginLeft: "10px" }}/>
        </Button>
      }
      {
        props.bibtext === "" ?
        <Button variant="contained" style={{ background: "#CED9E0", color: "#ffff", textShadow: "none"}} disabled>
          Copy Bibtex
          <FontAwesomeIcon icon={faCopy} style={{ marginLeft: "10px" }}/>
        </Button>
        :
        <CopyToClipboard text={props.bibtext}>
           <span>
             <Button variant="contained" style={{ background: "#232F34", color: "#ffff", textShadow: "none"}}>
               Copy Bibtex
               <FontAwesomeIcon icon={faCopy} style={{ marginLeft: "10px" }}/>
             </Button>
           </span>
        </CopyToClipboard>
      }
      {
        props.code === "" ?
        <Button variant="contained" style={{ background: "#CED9E0", color: "#ffff", textShadow: "none"}} disabled>
          Code
          <FontAwesomeIcon icon={faFileCode} style={{ marginLeft: "10px" }}/>
        </Button>
        :
        <Button variant="contained" style={{ background: "#232F34", color: "#ffff", textShadow: "none"}} href={props.code} target="_blank" rel="noopener">
          Code
          <FontAwesomeIcon icon={faFileCode} style={{ marginLeft: "10px" }}/>
        </Button>
      }
    </CardActions>
  </Card>
)
