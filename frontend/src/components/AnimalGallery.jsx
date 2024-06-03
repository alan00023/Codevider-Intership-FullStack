import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimalCard from "./AnimalCard";

const AnimalGallery = () => {
  //state to store the animals based on the type
  const { type } = useParams();
  //state to store the search term
  const [animals, setAnimals] = useState([]);
  //state to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  //external API call to fetch the animals based on the type
  //it will only re-run when the type changes
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/animals/${type}`);
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        console.error("Error fetching animals:", error);
      }
    })();
  }, [type]);

  //filtering the animals based on the search term
  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Rendering the component of Animal Gallery
  return (
    <div>
      {/* //search bar to filter the animals based on the name */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder={`Search ${type} by name`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* //gallery of animals */}
      <div className="gallery">
        {filteredAnimals.map((animal) => (
          // sending the props to the AnimalCard component
          <AnimalCard key={animal._id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalGallery;
