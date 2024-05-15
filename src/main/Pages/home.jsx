import { useState,useEffect, useRef,useReducer,lazy, Suspense  } from 'react';
import '../Styles/home.scss'
import Child from '../components/child';
import React from 'react'
import Childkachild from '../components/childkachild';
import ErrorBoundry from '../ErrorBoundry';

import {gql,useMutation } from '@apollo/client'
const POST_MUTATION = gql`
  mutation(
    $input: CreatePostInput!
  ){
    createPost(input: $input){
      id
      title
      body
    }
  }
`


export default function Home() {
  const [title, setTitle] = useState('')
  const [body, setbody] = useState('')
  const [createPost, {error}] = useMutation(POST_MUTATION)

  const handleClick = () => {
    const input = {
      input:{
        title: title,
        body: body,
      }
     
    }
    const createdPost = createPost({
      variables:input
    })
    
    console.log('input: ', createdPost);

  }
    return (
      <>
        <h2>Home page Mutation exap</h2>
        <label>title</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label>Body</label>
        <input type="text" name="body" value={body} onChange={(e) => setbody(e.target.value)}/>
        <button onClick={handleClick}>click</button>
      </>
    )
 
}
