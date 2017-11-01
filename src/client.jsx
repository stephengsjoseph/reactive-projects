import React from "react";
import RD from "react-dom";

import AwesomeComponent from "./AwesomeComponent.jsx";

RD.render(
    <div>
      <h1>Like Counter</h1>
      <AwesomeComponent></AwesomeComponent>
    </div>, 
    document.getElementById('root')
);

