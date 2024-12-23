import React from 'react';
import { useQuery } from '@apollo/client';  
import './App.css';
import { GET_COUNTRY } from './query'; 

function App() {
  const countryCode = 'IN';
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: countryCode }, 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>GraphQL + React integration</h3>
      <ul>
        <li><strong>Country code:</strong> {data.country.code}</li>
        <li><strong>Name:</strong> {data.country.name}</li>
        <li><strong>Capital:</strong> {data.country.capital}</li>
        <li><strong>Currency:</strong> {data.country.currency}</li>
      </ul>
    </div>
  );
}  

export default App;
