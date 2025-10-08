import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spiner from '../components/Spiner'


const ServicePage = () => {
  const {id}  = useParams();
  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    const fetchJob = async () =>{
      try{
      const res = await fetch(`/api/works/${id}`);
      const data = await res.json();
      setWork(data);
      }
      catch(error){
        console.log('Error fetching data', error)
      }finally{
        setLoading(false)
      }
    }

    fetchJob();

  })
  return loading ? <Spiner /> : <h1>{work.title} </h1>  
}

export default ServicePage