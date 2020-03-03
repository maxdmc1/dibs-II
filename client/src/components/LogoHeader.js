import React from "react";

import Navbar from "react-bootstrap/Navbar";

import LogoImage from "../images/logo.gif";

import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

export default function LogoHeader() {
  return (
    <Navbar fixed="top">
      <Link to="/">
        <Image src={LogoImage} />
      </Link>
    </Navbar>
  );
}
