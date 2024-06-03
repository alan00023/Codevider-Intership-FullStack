import React, { useState } from "react";

const AnimalCard = ({ animal }) => {
  //state to show the details of the animal card
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name} />
      <h2>{animal.name}</h2>
      <p>{animal.origin || animal.place_of_found}</p>
      <button
        className="more-details-button"
        onClick={() => setShowDetails(true)}
      >
        More Details
      </button>

      {showDetails && (
        <div className="animal-details">
          <div className="details-content">
            <h2>{animal.name}</h2>
            <img
              src={animal.image}
              alt={animal.name}
              className="animal-details-image"
            />
            <div className="details-info">
              {animal.type === "birds" ? (
                <>
                  <p>
                    <strong>Species:</strong> {animal.species}
                  </p>
                  <p>
                    <strong>Family:</strong> {animal.family}
                  </p>
                  <p>
                    <strong>Habitat:</strong> {animal.habitat}
                  </p>
                  <p>
                    <strong>Place Found:</strong> {animal.place_of_found}
                  </p>
                  <p>
                    <strong>Diet:</strong> {animal.diet}
                  </p>
                  <p>
                    <strong>Description:</strong> {animal.description}
                  </p>
                  {animal.weight_kg && (
                    <p>
                      <strong>Weight (kg):</strong> {animal.weight_kg}
                    </p>
                  )}
                  {animal.height_cm && (
                    <p>
                      <strong>Height (cm):</strong> {animal.height_cm}
                    </p>
                  )}
                </>
              ) : (
                <>
                  {animal.origin && (
                    <p>
                      <strong>Origin:</strong> {animal.origin}
                    </p>
                  )}
                  {animal.temperament && (
                    <p>
                      <strong>Temperament:</strong> {animal.temperament}
                    </p>
                  )}
                  {animal.colors && (
                    <p>
                      <strong>Colors:</strong> {animal.colors.join(", ")}
                    </p>
                  )}
                  <p>
                    <strong>Description:</strong> {animal.description}
                  </p>
                  {animal.breed_group && (
                    <p>
                      <strong>Breed Group:</strong> {animal.breed_group}
                    </p>
                  )}
                  {animal.size && (
                    <p>
                      <strong>Size:</strong> {animal.size}
                    </p>
                  )}
                  {animal.lifespan && (
                    <p>
                      <strong>Lifespan:</strong> {animal.lifespan}
                    </p>
                  )}
                  {animal.species && (
                    <p>
                      <strong>Species:</strong> {animal.species}
                    </p>
                  )}
                  {animal.family && (
                    <p>
                      <strong>Family:</strong> {animal.family}
                    </p>
                  )}
                  {animal.habitat && (
                    <p>
                      <strong>Habitat:</strong> {animal.habitat}
                    </p>
                  )}
                  {animal.place_of_found && (
                    <p>
                      <strong>Place Found:</strong> {animal.place_of_found}
                    </p>
                  )}
                  {animal.diet && (
                    <p>
                      <strong>Diet:</strong> {animal.diet}
                    </p>
                  )}
                  {animal.weight_kg && (
                    <p>
                      <strong>Weight (kg):</strong> {animal.weight_kg}
                    </p>
                  )}
                  {animal.height_cm && (
                    <p>
                      <strong>Height (cm):</strong> {animal.height_cm}
                    </p>
                  )}
                </>
              )}
            </div>
            <button
              className="close-button"
              onClick={() => setShowDetails(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalCard;
