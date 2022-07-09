import React from 'react'

export const Footer = () => {
  let foot= {
    position: "fixed",
    width: "100%",
    bottom: "0",
    border: "5px solid grey "
  }
  return (
    <div className="bg-dark text-light py-1 px-1" style={foot}>
    <h6 className="text-center">
    Made With React and :)
    </h6>

    </div>
  )
}
