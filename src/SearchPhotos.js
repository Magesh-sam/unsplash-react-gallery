import React, {useState } from 'react'

import {createApi} from "unsplash-js"




export default function SearchPhotos() {
const unsplash = new createApi({
    accessKey : "zPx6ctJfpnxdbiZsaWJcHP7B5Mzt9e8aPv5NkXUoGu0",
    
   
});

    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
   
    const searchPhotos = (e) => {
        e.preventDefault();
         unsplash.search
          .getPhotos({
            query: query,
            page: 1,
            perPage: 20,
        })
        .then((json) => {
                const jsonres = json.response.results
                if(jsonres.length === 0){
                    alert("No Results Found ! Try Again")
                }
                setPics(json.response.results)
        }) 
        
        setQuery("")
      
          
      };    

    
   
  return (
    <div className='searchphotos-app'>
      <form className='form' onSubmit={searchPhotos}>
       
       
        <input
         type="text"
         name='query'
         className='input'
         required = {true}
         placeholder={"Search Images"}
         value = {query}
         onChange = { (e) => setQuery(e.target.value) }
         />
         <button type="submit" className="button">
          Search
        </button>
      </form>
    
        
     
      <div className="card-list">
        {pics.map((pic) =>
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.regular}
              width="300px"
              height="350px"
            ></img>
          </div>)};
      </div>
    </div>
  )
}
