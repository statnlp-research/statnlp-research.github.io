import React from "react"
import Header from "../components/Header"
import PeopleCard from "../components/PeopleCard"
import peopleData from "../assets/people.json"

export default () => (
  <div style={{ margin: `5rem auto`, maxWidth: 1000 }}>
    <Header />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      { Object.keys(peopleData).map((name, i) =>
        <PeopleCard
          key={i}
          name={name}
          title={peopleData[name]["title"]}
          researchInterest={peopleData[name]["researchInterest"]}
          googlescholar={peopleData[name]["googlescholar"]}
          github={peopleData[name]["github"]}
          linkedin={peopleData[name]["linkedin"]}          
        />
      )}
    </div>
  </div>
)
