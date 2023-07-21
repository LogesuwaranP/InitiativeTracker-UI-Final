import React, {useState, useContext,useEffect } from 'react'
import DataContext from '../../Data/DataContext'
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Nav from "../../Nav/Nav"

const Home = () => {
  const navigate = useNavigate();
  const {auth} = useContext(DataContext);



  
  return (
    <>{!auth?<Login/>:<Nav/>}</>
  )
}

export default Home
