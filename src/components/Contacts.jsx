import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import Pagination from "./Pagination";
import "./Contact.css";

function Contacts() {
  const [page, setPage] = useState({ page: 1, totalPage: 0 });
  const [data, setData] = useState({ data: [] });

  async function getContacts(page) {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });
    const data = await response.json();
    setData({ data: data.data });
    setPage({ page, totalPage: data.total_pages });
    return data;
  }

  function nextPage() {
    if (page.page < page.totalPage) {
      setPage({ page: page.page + 1, totalPage: page.totalPage });
    }
  }

  function backPage() {
    if (page.page > 1) {
      setPage({ page: page.page - 1, totalPage: page.totalPage });
    }
  }

  function indexPage(i) {
    setPage({ page: i, totalPage: page.totalPage });
  }

  useEffect(() => {
    getContacts(page.page);
  }, [page.page]);

  return (
    <div className="col-lg-5 col-md-12">
      <div className="mt-4 d-flex justify-content-center">
        <Pagination
          totalPage={page.totalPage}
          nextPage={nextPage}
          backPage={backPage}
          indexPage={indexPage}
        />
      </div>
      <div className=" px-4 contacts">
        {data.data.map((el, index) => {
          return (
            <ContactCard
              first_name={el.first_name}
              last_name={el.last_name}
              email={el.email}
              avatar={el.avatar}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Contacts;
