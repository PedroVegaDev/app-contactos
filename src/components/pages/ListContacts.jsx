import React, { useState } from 'react'
import ContactCard from '../Molecules/ContactCard'
import Pagination from '../Atoms/Pagination'
import PageQuantity from '../Atoms/PageQuantity'
import { currentPageState } from '../../functions/principalFunctions'

function ListContacts({ data }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [contactsPerPage, setContactsPerPage] = useState(2)

  const { currentContacts, totalPage } = currentPageState(
    currentPage,
    contactsPerPage,
    data
  )

  function nextPage() {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  function backPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function indexPage(index) {
    setCurrentPage(index)
  }

  function selectPageQuantity(value) {
    setContactsPerPage(parseInt(value), setCurrentPage(1))
  }

  return (
    <div className="container d-flex align-items-center flex-column">
      <div className="mt-4 col-lg-6 d-flex justify-content-between">
        <Pagination
          totalPage={totalPage}
          nextPage={nextPage}
          backPage={backPage}
          indexPage={indexPage}
        />
        <PageQuantity selectPageQuantity={selectPageQuantity} />
      </div>
      <div className="col-lg-6 m-4">
        {currentContacts.map((el, index) => {
          return (
            <ContactCard
              id={el.id}
              first_name={el.first_name}
              last_name={el.last_name}
              email={el.email}
              avatar={el.avatar}
              btnDelete={true}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ListContacts
