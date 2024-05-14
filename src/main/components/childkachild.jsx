import { useState,useContext } from 'react';
import {CustomContext} from '../../index'
import HighOrder from '../Pages/HighOrder';

 function ChildKaChild ({counter, handleCounter}){

    return (
      <>
        <h2>Second Child</h2>
        <h3>Count comming from High Order {counter} </h3>
        <button onClick={handleCounter}>Click</button>
      </>
    )
  }

  export default HighOrder(ChildKaChild)