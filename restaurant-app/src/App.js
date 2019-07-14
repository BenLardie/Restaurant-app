import React, { useEffect, useState } from 'react';
import './App.css';
import { API, graphqlOperation } from 'aws-amplify';
import { listRestaurants } from './graphql/queries'

function App() {

  const [restaurants, setRestaurants] = useState([]);

  async function fetchData(){
    try {
      const apiData = await API.graphql(graphqlOperation(listRestaurants))
      const results = apiData.data.listRestaurants.items
      setRestaurants(results)
    } catch (err) {
      console.log('error: ', err)
    }
}

useEffect(() => {
    fetchData()
},[])


  return (
    <div className="App">
        {
          restaurants.map((rest, i) => (
            <div key={i}>
              <h1>{rest.name}</h1>
            </div>
          ))
        }
    </div>
  );
}

export default App;
