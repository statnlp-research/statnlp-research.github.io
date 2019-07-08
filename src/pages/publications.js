import React from "react"
import Divider from '@material-ui/core/Divider'
import Header from "../components/Header"
import PublicationCard from '../components/PublicationCard'
import publicationData from '../assets/publication.json'

export default () => (
  <div style={{ margin: `5rem auto`, maxWidth: 1000 }}>
    <Header />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      { Object.keys(publicationData).reverse().map((year, i) =>
        <div key={i}>
          <h1>{year}</h1>
          {
            Object.keys(publicationData[year]).map((name, i) =>
            <PublicationCard
              key={name}
              name={name}
              authors={publicationData[year][name]["authors"]}
              paper={publicationData[year][name]["paper"]}
              bibtext={publicationData[year][name]["bibtext"]}
              code={publicationData[year][name]["code"]}
            />
          )}
        </div>
      )}
    </div>
  </div>
)
