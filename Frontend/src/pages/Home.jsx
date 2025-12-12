import React from 'react'

const Home = (props) => {
  return (
    <>
    <h1>Home Page</h1>
    <div> Name: {props.name}</div>
    <div>Department: {props.department}</div>
    </>
  )
} 

export default Home
