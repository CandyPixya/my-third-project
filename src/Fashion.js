import React from 'react';
import { ReactDOM } from 'react-dom/client';
import Contacts from './pages/FashionB/FashionB';
import black from "./pages/Media/black.png"
import winter from "./pages/Media/winter.png"
import hat from "./pages/Media/hat.png"
import jeans from "./pages/Media/jeans.png"

export default function Fashion() {
  return (
    <>
          <Contacts
      img={black}
      name= "Black"
      phone="(212)555"
      email="blackforlife@gmail.com"
    />
    <Contacts
      img={winter}
      name= "Winter"
      phone="(211)342"
      email="winter@gmail.com"
    />
    <Contacts
      img={jeans}
      name= "Jeans"
      phone="(342)4577"
      email="jeansforlife@gmail.com"
    />
    <Contacts
      img={hat}
      name= "Hat"
      phone="(212)5235"
      email="hats@gmail.com"
    />
    </>
  )
}