import React, { useState } from "react";

const Forms = () => {
  const [FirstName, LastName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    LastName((preValue) => {
      if (name === "first_name") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "last_name") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "Email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "Phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
      }
    });
  };

  const Submit = (event) => {
    event.preventDefault();
    alert("Form Submitted Successfully");
  };

  return (
    <React.Fragment>
      <form onSubmit={Submit}>
        <div className="click">
          <h1>
            Hello {FirstName.fname} {FirstName.lname}
          </h1>
          <br />
          <h4>{FirstName.email}</h4>
          <br />
          <h4>{FirstName.phone}</h4>
          <br />
          <input
            type="text"
            placeholder="Enter your first name"
            name="first_name"
            onChange={inputEvent}
            value={FirstName.fname}
          />
          <br />

          <input
            type="text"
            placeholder="Enter your last name"
            name="last_name"
            onChange={inputEvent}
            value={FirstName.lname}
          />

          <input
            type="text"
            placeholder="Enter your email address"
            name="Email"
            onChange={inputEvent}
            value={FirstName.email}
          />

          <input
            type="number"
            pattern="[0-9]*"
            inputmode="numeric"
            placeholder="Enter your phone number"
            name="Phone"
            onChange={inputEvent}
            value={FirstName.phone}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Forms;
