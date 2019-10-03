import React from "react"
import Header from "../components/Header"
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <div style={{ margin: `5rem auto`, maxWidth: 1000 }}>
    <Header />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <h1>StatNLP-core</h1>
      <Card style={{ width: "100%", marginBottom: "15px", padding: "20px", minWidth: "1000px" }}>
        StatNLP structured prediction framework developed by StatNLP team provdies a way for
        NLP researchers to rapidly develop structured models including conditional random fields (CRF),
        structured perceptron, structured SVM, softmax-margin CRF as well as neural
        CRF with various inference strategies.
        <CardActions>
          <Button variant="contained" style={{ background: "#232F34", color: "#ffff", textShadow: "none"}} href="https://gitlab.com/sutd_nlp/statnlp-core" target="_blank" rel="noopener">
            Download
            <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "10px" }}/>
          </Button>
        </CardActions>
      </Card>

      <h1>StatNLP Pytorch</h1>
      <Card style={{ width: "100%", marginBottom: "15px", padding: "20px", minWidth: "1000px" }}>
        The PyTorch version of StatNLP implementation V0.1.
        Please also make sure you understand the fundamental knowledge of the
        framework as well as the Java framework.
        <CardActions>
          <Button variant="contained" style={{ background: "#232F34", color: "#ffff", textShadow: "none"}} href="https://github.com/statnlp-research/statnlp-neural" target="_blank" rel="noopener">
            Download
            <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "10px" }}/>
          </Button>
        </CardActions>
      </Card>
    </div>
  </div>
)
