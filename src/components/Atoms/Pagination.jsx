import React, { useState, useEffect } from 'react'

function Pagination({ totalPage, nextPage, backPage, indexPage }) {
  const [pages, setPages] = useState([])

  useEffect(() => {
    let paginas = []
    for (let i = 1; i <= totalPage; i++) {
      paginas.push(i)
    }
    setPages(paginas)
  }, [totalPage])

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Previous"
            onClick={backPage}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {pages.map((el, index) => {
          return (
            <li className="page-item" key={index}>
              <button className="page-link" onClick={() => indexPage(el)}>
                {el}
              </button>
            </li>
          )
        })}
        <li className="page-item">
          <button className="page-link" onClick={nextPage} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
