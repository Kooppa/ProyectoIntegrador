import React from 'react'
import { useState } from 'react';

export const Menu = (props) => {
    const [cName, setcName] = useState(["nav-link ", "nav-link "]);

  return (
    <ul className="nav nav-pills">
            <li className="nav-item">
              <button className={cName[0]} 
              onClick={props.btn1}
              >Usuarios</button>
            </li>
            <li className="nav-item">
              <button className={cName[1]} 
              onClick={props.btn2}
              >Items</button>
            </li>
    </ul>
  )
}
