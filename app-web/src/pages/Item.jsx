import React from 'react'
import { useState, useEffect } from 'react';
import  DatosItem from './DatosItem';
import fetchItems from '../helpers/fetchItems';
import addItem from '../helpers/addItem';
import updateItem from '../helpers/updateItem';

export const Item = () => {
    const [Items, setItems] = useState([]);

    const [showForm, setShowForm] = useState(false);


    // const [addValues, setAddValues] = useState([])

    const apperForm = () => {
        setShowForm(!showForm);
    };

    const getItem = async() => {
      const data = await fetchItems();
      // console.log(data)
      for (const element of data) {
        setItems(Items => [...Items, element])
      }
    }

    useEffect(() => {
      getItem();
    }, [])


    function adding() {
      console.log("adding")
    }

  
      // const {counter1,counter2,counter3,counter4,counter5,counter6} = state;
    
      return (
        <>
        <h2>Items Actuales</h2>
        <div>
          <table className='table'>
            <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Item</th>
              <th>Dueños ID</th>
            </tr>
          </thead>
          <tbody>
              {Items.map(us => (
                <DatosItem
                key= {us.id}
                value={us}
                />
              ))}
          </tbody>
          </table>
          <br />

          
           <br />
          <button onClick={apperForm}>Agregar Item</button>
          
        </div>
        <br />
        
        

           {showForm && (
        <form onSubmit={ev => {
          //ev.preventDefault();
          const name = ev.target.add1.value
          const directory = ev.target.add2.value
          
          addItem(name, directory);
        }}>
          <div className="form-group">
            <h5>Agregar otro item:</h5>
            <label htmlFor="exampleInputEmail1">Nombre</label>
            <input name='add1' autoComplete='off' type="text" className="form-control" id="addName" aria-describedby="emailHelp" placeholder="Nombre"/ >
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Dueño ID</label>
            <input name='add2' autoComplete='off' type="number" className="form-control" id="adddirectory" placeholder="Dueño id"/>
          </div>
          <button type="submit" className="btn btn-primary" >Agregar</button>
          </form>
           )}
        </>
      )
    }
    export default Item