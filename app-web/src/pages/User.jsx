import React from 'react'
import { useState, useEffect } from 'react';
import  DatosUser from './DatosUser';
import fetchUsers from '../helpers/fetchUsers';
import addUser from '../helpers/addUser';
import updateUser from '../helpers/updateUser';

export const User = () => {
    const [users, setUsers] = useState([]);

    const [showForm, setShowForm] = useState(false);


    // const [addValues, setAddValues] = useState([])

    const apperForm = () => {
        setShowForm(!showForm);
    };

    const getUser = async() => {
      const data = await fetchUsers();
      // console.log(data)
      for (const element of data) {
        setUsers(users => [...users, element])
      }
    }

    useEffect(() => {
      getUser();
    }, [])


    function adding() {
      console.log("adding")
    }

  
      // const {counter1,counter2,counter3,counter4,counter5,counter6} = state;
    
      return (
        <>
        <h2>Usuarios Actuales</h2>
        <div>
          <table className='table'>
            <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
              {users.map(us => (
                <DatosUser
                key= {us.id}
                value={us}
                />
              ))}
          </tbody>
          </table>
          <br />

          
           <br />
          <button onClick={apperForm}>Agregar Usuario</button>
          
        </div>
        <br />
        
        

           {showForm && (
        <form onSubmit={ev => {
          //ev.preventDefault();
          const name = ev.target.add1.value
          const age = ev.target.add2.value
          
          addUser(name, age);
        }}>
          <div className="form-group">
            <h5>Agregar otro usuario:</h5>
            <label htmlFor="exampleInputEmail1">Nombre</label>
            <input name='add1' autoComplete='off' type="text" className="form-control" id="addName" aria-describedby="emailHelp" placeholder="Nombre"/ >
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Edad</label>
            <input name='add2' autoComplete='off' type="number" className="form-control" id="addAge" placeholder="Edad"/>
          </div>
          <button type="submit" className="btn btn-primary" >Agregar</button>
          </form>
           )}
        </>
      )
    }
    export default User