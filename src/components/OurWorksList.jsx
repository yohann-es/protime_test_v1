import { useState } from "react"
import { Link } from "react-router-dom";


const OurWorksList = ({work}) =>{
    const [showFullDescription, setShowFullDescription] = useState(false);
    
    
    let description = work.description

    if(!showFullDescription){
        description = description.substring(0,90) + '...'
    }


    return (
        <div  className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">{work.type} </div>
                  <h3 className="text-xl font-bold"> {work.title} </h3>
                </div>

                <div className="mb-5">
                  {description}
                  <button className="text-blue-500" onClick={()=> (setShowFullDescription((prevShow) =>(!prevShow)))}>
                    {showFullDescription ? 'show less' : 'show more'}
                </button>
                </div>

                

                <h3 className="text-blue-900 mb-2">
                  {work.salary} /Year
                </h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  
                  <Link
                    to={`/services/${work.id}`}
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
    )
}

export default OurWorksList