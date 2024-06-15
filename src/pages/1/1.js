import React from "react";
import ReactDOM from "react-dom/client";

export default function Test() {
  const date = new Date()
  const hours = date.getHours() % 12
  let timeOfDaye
  if (hours < 12 && hours > 3) {
    timeOfDaye = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDaye = "afternoon"
  } else {
    timeOfDaye = "night"
  }
  return (
    <div>
      <h2>Good {timeOfDaye}</h2>
    </div>
  )
}