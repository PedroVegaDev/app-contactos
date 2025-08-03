import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ListContacts from "./components/ListContacts";
import SaveContact from "./components/SaveContact";
import Error404 from "./components/Error404";
import { db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [data, setData] = useState([]);

  async function getListContact() {
    const querySnap = await getDocs(collection(db, "contacts"));

    const listContacts = querySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(listContacts);
  }

  useEffect(() => {
    getListContact();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listaContactos" element={<ListContacts data={data} />} />
        <Route path="/guardarContacto" element={<SaveContact />} />
        <Route element={Error404} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
