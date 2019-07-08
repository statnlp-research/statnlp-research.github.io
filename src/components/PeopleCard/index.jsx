import React from "react"
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Chip from '@material-ui/core/Chip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import IconButton from '@material-ui/core/IconButton'

export default (props) => (
  <Card style={{ maxWidth: 300, margin: "10px" }}>
    <CardHeader
      avatar={
        <img alt={props.name}
             src={require("../../assets/img/dp/" + props.name.replace(/\s+/g, "").toLowerCase() + ".webp")}
             style={{ margin: 3, width: "70px", height: "70px", borderRadius: "50%" }}
        />
      }
      title={props.name}
      subheader={props.title}
    />
    <CardContent style={{ marginTop: "-40px" }}>
      <div>
        {
          props.googlescholar === "" ?
          <IconButton size="small" aria-label="Google Scholar" style={{ color: "#CED9E0", background: "#ffff" }} disabled>
            <FontAwesomeIcon icon={faGoogle} />
          </IconButton>
          :
          <IconButton size="small" aria-label="Google Scholar" style={{ color: "#232F34", background: "#ffff" }} href={props.googlescholar} target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faGoogle} />
          </IconButton>
        }
        {
          props.github === "" ?
          <IconButton size="small" aria-label="Github" style={{ color: "#CED9E0", background: "#ffff" }} disabled>
            <FontAwesomeIcon icon={faGithub} />
          </IconButton>
          :
          <IconButton size="small" aria-label="Github" style={{ color: "#232F34", background: "#ffff" }} href={props.github} target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faGithub} />
          </IconButton>
        }
        {
          props.linkedin === "" ?
          <IconButton size="small" aria-label="Linkedin" style={{ color: "#CED9E0", background: "#ffff" }} disabled>
            <FontAwesomeIcon icon={faLinkedin} />
          </IconButton>
          :
          <IconButton size="small" aria-label="Linkedin" style={{ color: "#232F34", background: "#ffff" }} href={props.linkedin} target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faLinkedin} />
          </IconButton>
        }
      </div>
      <div>
        Research Interests:
        <div style={{ display: "inline-block", marginRight: "100%"  }}>
          {
            props.researchInterest.map(ri =>
              <Chip
                key={ri}
                size="small"
                label={ri}
                style={{background:"#182026", color: "#ffff", fontSize: "13px", margin: "3px" }}
              />
          )}
        </div>
      </div>
    </CardContent>
  </Card>
)
