import Works from "../Works.json";
import OurWorksList from "./OurWorksList";
import { useState, useEffect } from "react";
import Spiner from "./Spiner";



const OurWorks = ({isHome= false}) => {

  // const WorksList  = isHome ? Works.slice(0,3) : Works
  const [WorksList_db, setWorksList_db] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetch_works = async () =>{
      const apiUrl = `https://protime-backend-test-1.onrender.com/works${isHome ? '?_limit=3' : ''}`;

      try{
      const res = await fetch(apiUrl);
      const data = await res.json();
      setWorksList_db(data);
      }
      catch(error){
        console.log('Error fetching data', error)
      }finally{
        setLoading(false)
      }
      
    }

    fetch_works();
  },[]);


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent works' : 'Our works'}
        </h2>

        
          {Loading? (
            <Spiner loading={Loading} />
          )
            :(
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {
          WorksList_db.map((work, index) => (
            <OurWorksList work={work} key={index} />
          ))}
          </div>
          )
          }
          
        
      </div>
    </section>
  );
};

export default OurWorks;
