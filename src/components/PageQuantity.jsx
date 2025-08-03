import React from 'react'

function PageQuantity({ selectPageQuantity }) {
  const pageQuantity = [2, 4, 8, 10]

  return (
    <div>
      <select
        name="selectPage"
        id="selectPage"
        className="custom-select"
        onChange={(e) => selectPageQuantity(e.target.value)}
      >
        {pageQuantity.map((el, index) => {
          return (
            <option key={index} value={el}>
              {el}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default PageQuantity
