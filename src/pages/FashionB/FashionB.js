import React from "react";
import { ReactDOM } from "react-dom/client";
import email from "../Media/email.png"
import call from "../Media/call.png"

export default function Contacts(props) {
  return(
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={call} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={email} />
        <p>{props.email}</p>
      </div>
    </div>
  )
}