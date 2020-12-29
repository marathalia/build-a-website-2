import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> Maria's Weather App </h1>
      </div>
      <nav>
        <a href="/?city=Jakarta"> Jakarta </a>
        <a href="/?city=New%20York"> New York </a>
        <a href="/?city=Bandung"> Tokyo </a>
        <a href="/?city=TOkyo"> Sydney </a>
      </nav>
    </header>
  );
}

export default Header;
