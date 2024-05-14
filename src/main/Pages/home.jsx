import { useState,useEffect, useRef,useReducer,lazy, Suspense  } from 'react';
import '../Styles/home.scss'
import Child from '../components/child';
import React from 'react'
import Childkachild from '../components/childkachild';
import ErrorBoundry from '../ErrorBoundry';

import {gql,useQuery } from '@apollo/client'
const GET_TODOS = gql`
query {
  post(id: 1) {
    id
    title
    body
  }
}
`;


export default function Home() {
  const {loading,error, data} = useQuery(GET_TODOS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("data", data)
    return (
      <>
        <h2>Home page</h2>
      </>
    )
 
}
