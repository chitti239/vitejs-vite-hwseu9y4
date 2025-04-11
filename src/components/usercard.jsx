// write the component code here
import React from 'react'

const usercard = () => {
    const profile = "https://i.pinimg.com/474x/8d/cb/fe/8dcbfe53be03dbb72f389799f3f21a62.jpg";
    const name = "Sharini";
    const mail = "sharinis596@email.com";
    const phoneNumber = "7989475620"
    const address ="456 Elm Street, Hyderabad, Telangana, India"

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "300px",
    padding: "16px",
    textAlign: "center",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif"
  };

  const profileStyle = {
    borderRadius: "5%",
    width: "300px",
    height: "300px",
    marginBottom: "16px"
  };

  const textStyle = {
    margin: "8px 0",
    fontSize: "16px"
  };



  return (
    <div style={cardStyle}>
      <img src={profile} alt="Profile" style={profileStyle} />
      <h2>Name : {name}</h2>
      <p style={textStyle}><strong>Email:</strong> {mail}</p>
      <p style={textStyle}><strong>Phone Number: </strong> {phoneNumber}</p>
      <p style={textStyle}><strong>Address:</strong> {address}</p>
    </div>
  )
}

export default usercard

