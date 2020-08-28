import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Organisms/Header'
import Home from './components/pages/Home'
import ListContacts from './components/pages/ListContacts'
import SaveContact from './components/pages/SaveContact'
import Error404 from './components/pages/Error404'
import { db } from './.firebase/FirebaseConfig'

function App() {
  const [data, setData] = useState([])

  function getListContact() {
    db.collection('contacts').onSnapshot((querySnap) => {
      let listContacts = []
      querySnap.forEach((doc) => {
        let obj = {
          id: doc.id,
          ...doc.data(),
        }
        listContacts.push(obj)
      })
      setData(listContacts)
    })
  }

  useEffect(() => {
    getListContact()
  }, [])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/listaContactos">
          <ListContacts data={data} />
        </Route>
        <Route exact path="/guardarContacto">
          <SaveContact />
        </Route>
        <Route component={Error404} />
      </Switch>
    </Router>
  )
}

export default App
