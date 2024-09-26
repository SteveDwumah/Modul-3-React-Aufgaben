import React, { useState, useEffect } from 'react';
import logo from "./assets/img/c2cb0207a08d19a7f8bb1526d32052cd.png"

interface Beer {
  id: string
  name: string;
  tagline: string;
  contributed_by: string;
  first_brewed: string;
  description: string;
  image_url: string;
}

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch('https://ih-beers-api2.herokuapp.com/beers');
        const data: Beer[] = await response.json();
        setBeers(data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div className="beer-list">
      <h1>My Beerlist 🤪🍻</h1>
      {beers.map((beer) => (
        <div key={beer.id} className="beer-item">
          <img src={beer.image_url} alt={beer.name} />
          <div className='beer-info'>
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>Created by: {beer.name}</p>
          <p>{beer.description}</p>
          <p>First brewed: {beer.first_brewed}</p>
          <button onClick={() => {window.alert("🚨🚧 NOCH NICHT FERTIG!!! 🚧🚨")}}>More</button>
          </div>
        </div>
      ))}
      <footer>
        <img src={logo} alt="" />
      </footer>
    </div>
  );
}

export default App

