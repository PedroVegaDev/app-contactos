import React from "react";
import CreateContact from "./CreateContact";
import Contacts from "./Contacts";

function Home() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row d-flex justify-content-around col-12">
        <h1></h1>
        <CreateContact />
        <Contacts />
      </div>
    </div>
  );
}

export default Home;
