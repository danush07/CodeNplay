import React from 'react'
import './Clients.css'


let imgs = [
  "https://global.abb/content/dam/abb-etc/commons/abb-logo.svg",
  "https://lwfiles.mycourse.app/code-and-compile-public/484b9532135327bed29d408eb836ad9f.png",
  "https://simumatik.com/wp-content/uploads/2020/09/Simumatik_Logo_Full_Filled_Green-2-01-1-1.png",
  "https://i.ibb.co/wsk1mRj/RRCE-logo-1.png",
  "https://i.ibb.co/2KyzRfG/Picsart-23-07-12-19-37-20-125.png",
];
function Clients() {

  return (
    <div className="clients">
      <h2>Training Partners</h2>
      <div className="client-images">
        <img src={imgs[0]} alt="logo1" />
        <img src={imgs[1]} alt="logo2" />
        <img src={imgs[2]} alt="logo3" />
        <img src={imgs[3]} alt="logo4" />
        <img src={imgs[4]} alt="logo5" />
      </div>
    </div>
  );
}

export default Clients