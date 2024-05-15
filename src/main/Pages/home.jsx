import { useState,useEffect, useRef,useReducer,lazy, Suspense  } from 'react';
import '../Styles/home.scss'
import Child from '../components/child';
import React from 'react'
import Childkachild from '../components/childkachild';
import ErrorBoundry from '../ErrorBoundry';

import {gql,useQuery } from '@apollo/client'



export default function Home() {
    return (
      <>
        <h2 data-testid='heading'>Home page</h2>
      </>
    )
 
}