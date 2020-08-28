import React from 'react'
import './ContactCard.css'
import { removeContact } from '../../.firebase/FirebaseFuntions'

function ContactCard({
  id,
  first_name,
  last_name,
  email,
  avatar,
  btnDelete = false,
}) {
  let buttonDelete, imageAvatar

  if (btnDelete) {
    buttonDelete = (
      <svg
        onClick={() => removeContact(id)}
        width="30px"
        height="30px"
        viewBox="0 0 16 16"
        className="bi bi-x-square-fill text-danger"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"
        />
      </svg>
    )

    imageAvatar = navigator.onLine ? (
      avatar === '' ? (
        <img className="avatar" src="./avatar.png" alt={first_name} />
      ) : (
        <img className="avatar" src={avatar} alt={first_name} />
      )
    ) : (
      <img className="avatar" src="./avatar.png" alt={first_name} />
    )
  } else {
    imageAvatar = <img className="avatar" src={avatar} alt={first_name} />
  }

  return (
    <div className="contact-card">
      <div className="content-avatar">{imageAvatar}</div>
      <div className="contact-info">
        {buttonDelete}
        <h5 className="name">{first_name + ' ' + last_name}</h5>
        <p className="email">{email}</p>
      </div>
    </div>
  )
}

export default ContactCard
