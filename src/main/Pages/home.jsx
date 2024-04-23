import { useState } from 'react';
import '../Styles/home.css'
import Child from '../components/child';

export default function Home (){
    const [formObj,setformObj] = useState({})
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
      ];
      const handleChange = (e) => {
        const name = e.target.name
        const  value = e.target.value
        setformObj((prevstate) => {
          return {...prevstate, [name]: value}
        })
        console.log('email:',formObj);
      }
      const handleSubmit = (e) => {
        console.log('handleSubmit: ', e);
      }
  return (
    <>
        <h1>Hello world</h1>
        {/* props passing */}

        {/* list and conditional rendering */}
        {cars.length > 0 && cars.map((car) => <Child brand={car.brand} key={car.id} />)}

        {/* form */}
        <form onSubmit={handleSubmit}>
            <label>Enter email</label>
            <input type="email" name='email' value={setformObj.email} onChange={(e) => handleChange(e)} />
            <br/>
            <label>Enter password</label>
            <input type="email" name='password' value={setformObj.password} onChange={(e) => handleChange(e)} />
            <br/>
            <label>Enter text area</label>
            <textarea name='textarea' value={setformObj.textarea} onChange={handleChange}></textarea>
        </form>

        
    </>
  )
}
