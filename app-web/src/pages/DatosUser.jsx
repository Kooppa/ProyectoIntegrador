import React from 'react'
import { useState, useEffect } from 'react';
import updateUser from '../helpers/updateUser';
import delUser from '../helpers/delUser';

export const DatosUser = ({value}) => {
  
    const [showFormUp, setShowFormUp] = useState(false);

    const apperForm = () => {
      setShowFormUp(!showFormUp);
    };

    function update() {
      let id = value.id
      let name = namef.value
      let age = agef.value
      console.log('id:',id,'name:', name,'age:', age)
      updateUser(id, name, age);
      window.location.reload(false);
    }

    function del() {
      let id = value.id
      console.log(id)
      delUser(id);
      window.location.reload(false);
    }

  return (
    <>
    <tr>
      <th scope="row">{value.id}</th>
      <td>{value.name}</td>
      <td>{value.age}</td>
      <td><button 
          onClick={apperForm} 
          >Update</button></td>
      <td><button 
          onClick={del} 
          // onClick={btnUp}
          >Delete</button></td>
    </tr>
    
    {showFormUp && (
          <tr>
            <th scope="row">{value.id}</th>
            <td><input autoComplete='off' id="namef" name="namef" type="text" /></td>
            <td><input autoComplete='off' id="agef" name="agef" type="number" /></td>
            <td><button 
                onClick={update} 
                >Send</button></td>
      
          </tr>
           )}
    </>
    


      
      
  )
}
export default DatosUser
