import React from 'react'
import CreateContact from '../Organisms/CreateContact'
import Contacts from '../Organisms/Contacts'

function Home() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row d-flex justify-content-around col-12">
        <CreateContact />
        <Contacts />
      </div>
    </div>
  )
}

export default Home
