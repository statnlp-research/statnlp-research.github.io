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
      <h1>Multilingual Geoquery</h1>
      <Card style={{ width: "100%", marginBottom: "15px", padding: "20px", minWidth: "1000px" }}>
        A multilingual dataset for Geoquery. Each instance is a sentence annotated with its meaning representations.
        The corpora in Chinese, Indonesia, Farsi and Swedish are originally released by
        "Semantic Parsing with Neural Hybrid Trees".
        <CardActions>
          <Button variant="contained" style={{ background: "#232F34", color: "#ffff", textShadow: "none"}} href="https://github.com/statnlp-research/statnlp-datasets/blob/master/dataset/geo880_tree.zip" target="_blank" rel="noopener">
            Download
            <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "10px" }}/>
          </Button>
        </CardActions>
      </Card>

      <h1>MalwareTextDB</h1>
      <Card style={{ width: "100%", marginBottom: "15px", padding: "20px", minWidth: "1000px" }}>
        The dataset in various format (see the readme for more details) can be found here:
        MalwareTextDB-1.0.zip (5,5MB download, 20MB unzipped) The dataset is originally
        published in this paper "MalwareTextDB: A Database for Annotated Malware Articles".
        <CardActions>
          <Button variant="contained" style={{ background: "#232F34", color: "#ffff", textShadow: "none"}} href="https://github.com/statnlp-research/statnlp-datasets/blob/master/dataset/MalwareTextDB-1.0.zip" target="_blank" rel="noopener">
            Download
            <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "10px" }}/>
          </Button>
        </CardActions>
      </Card>

      <h1>Multilingual ATIS</h1>
      <Card style={{ width: "100%", marginBottom: "15px", padding: "20px", minWidth: "1000px" }}>
        A new multilingual version of the ATIS corpus. The dataset is originally published in this paper "Neural Architectures for Multilingual Semantic Parsing".
        <CardActions>
          <Button variant="contained" style={{ background: "#232F34", color: "#ffff", textShadow: "none"}} href="https://github.com/statnlp-research/statnlp-datasets/blob/master/dataset/multilingual_atis.tgz" target="_blank" rel="noopener">
            Download
            <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "10px" }}/>
          </Button>
        </CardActions>
      </Card>

      <h1>NP-annotated SMS dataset</h1>
      <Card style={{ width: "100%", marginBottom: "15px", padding: "20px", minWidth: "1000px" }}>
        Thanks to Alexander Binder, Jie Yang, Dinh Quang Thinh, as well as 64 undergraduate students for the help in
        creating the annotations for the NUS SMS Corpus. The annotation guidelines given to students.
        <CardActions>
          <Button variant="contained" style={{ background: "#232F34", color: "#ffff", textShadow: "none"}} href="https://github.com/statnlp-research/statnlp-datasets/blob/master/dataset/SMSNP_data.zip" target="_blank" rel="noopener">
            Download
            <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "10px" }}/>
          </Button>
        </CardActions>
      </Card>

      <h1>Chinese Address dataset</h1>
      <Card style={{ width: "100%", marginBottom: "15px", padding: "20px", minWidth: "1000px" }}>
        The dataset and annotation guideline are uploaded to Github. Thanks to Ali Damo Academy for
        the Chinese address Corpus.
        <CardActions>
          <Button variant="contained" style={{ background: "#232F34", color: "#ffff", textShadow: "none"}} href="https://github.com/leodotnet/neural-chinese-address-parsing/" target="_blank" rel="noopener">
            Download
            <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "10px" }}/>
          </Button>
        </CardActions>
      </Card>

      <h1>Taobao and Youku NER Dataset</h1>
      <Card style={{ width: "100%", marginBottom: "15px", padding: "20px", minWidth: "1000px" }}>
      The dataset and annotation guideline are uploaded to Github. Thanks to Ali Damo Academy for the annotations.
        <CardActions>
          <Button variant="contained" style={{ background: "#232F34", color: "#ffff", textShadow: "none"}} href="https://github.com/allanj/ner_incomplete_annotation" target="_blank" rel="noopener">
            Download
            <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "10px" }}/>
          </Button>
        </CardActions>
      </Card>


    </div>
  </div>
)
