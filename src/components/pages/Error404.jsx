import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column"
      style={{ height: '80vh' }}
    >
      <h1 className="display-1 font-weight-bolder">Error 404</h1>
      <h2 className="font-weight-bold">Página no encontrada</h2>
      <Link className="navbar-brand" to="/">
        Volver
      </Link>
    </div>
  )
}

export default Error404
