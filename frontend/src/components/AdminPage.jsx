import React, { useState, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const animalInitialState = {
  name: "",
  origin: "",
  temperament: "",
  colors: "",
  description: "",
  image: "",
  breed_group: "",
  size: "",
  lifespan: "",
  species: "",
  family: "",
  habitat: "",
  place_of_found: "",
  diet: "",
  weight_kg: "",
  height_cm: "",
};

const AdminPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [animals, setAnimals] = useState([]);
  const [newAnimal, setNewAnimal] = useState(animalInitialState);

  //fetching animals from the backend
  const fetchAnimals = useCallback(async () => {
    try {
      const response = await fetch(`/animals/${type}`);
      const data = await response.json();

      setAnimals(data);
    } catch (error) {
      console.error("Error fetching animals:", error);
    }
  }, [type]);

  //fetching animals when the component mounts it will only be used when fetchAnimals changes
  useEffect(() => {
    fetchAnimals();
  }, [fetchAnimals]);

  //handling in case of the change in the type of the animal
  const handleChangeType = (event) => {
    navigate(`/admin/${event.target.value}`);
    setNewAnimal(animalInitialState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAnimal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //handling the creation or updation of an animal
  const handleCreateOrUpdateAnimal = async () => {
    try {
      const method = newAnimal._id ? "PUT" : "POST";
      const url = newAnimal._id
        ? `/animals/${type}/${newAnimal._id}`
        : `/animals/${type}`;

      // Convert the colors string to an array
      // Used for api to send better request to the backend
      const animalValues = {
        ...newAnimal,
        type,
        colors: newAnimal.colors
          ? newAnimal.colors.split(",").map((color) => color.trim())
          : [],
      };

      // Return a new object with only the fields that are not empty
      // loader for the api to send the request to the backend
      const animalPayload = Object.entries(animalValues).reduce(
        (acc, [key, value]) => {
          if (key === "_id" || key === "__v") return { ...acc };

          if (
            animalValues[key] === "" ||
            (Array.isArray(animalValues[key]) && animalValues[key].length === 0)
          )
            return { ...acc };

          if (key === "weight_kg" || key === "height_cm")
            return { ...acc, [key]: parseFloat(value) };

          return { ...acc, [key]: value };
        },
        {}
      );

      // Validation: check if all required fields are filled
      const requiredFields = ["name", "description", "image"];
      for (const field of requiredFields) {
        if (!animalPayload[field]) {
          alert(`The field ${field} is mandatory.`);
          return;
        }
      }

      //Creates the animal in case it passess all the validations
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(animalPayload),
      });

      if (response.ok) {
        await fetchAnimals();
        setNewAnimal(animalInitialState);
      }
    } catch (error) {
      console.error(
        `Error ${newAnimal._id ? "updating" : "creating"} animal:`,
        error
      );
    }
  };

  //handling the edit of an animal
  const handleEditAnimal = (animal) => {
    setNewAnimal({
      ...animal,
      colors: animal.colors ? animal.colors.join(", ") : "",
    });
  };

  //handling the deletion of an animal
  const handleDeleteAnimal = async (id) => {
    try {
      const response = await fetch(`/animals/${type}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        await fetchAnimals();
      }
    } catch (error) {
      console.error("Error deleting animal:", error);
    }
  };

  
  //Returning the admin component render with its form and list of animals
  return (
    <div>
      <section className="admin-content">
        <select
          value={type}
          onChange={handleChangeType}
          className="animal-type-select"
        >
          <option value="cats">Cats</option>
          <option value="dogs">Dogs</option>
          <option value="birds">Birds</option>
        </select>

        <div className="animal-form">
          <h2>{newAnimal._id ? "Edit" : "Create"} Animal</h2>
          <AnimalForm
            animal={newAnimal}
            type={type}
            onChange={handleInputChange}
          />
          <button onClick={handleCreateOrUpdateAnimal}>
            {newAnimal._id ? "Update" : "Create"}
          </button>
        </div>
        <div className="animal-list">
          <h2>Animals</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Origin</th>
                <th>Photo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <tr key={animal._id}>
                  <td>{animal.name}</td>
                  <td>{animal.origin || animal.place_of_found}</td>
                  <td>
                    <img src={animal.image} alt={animal.name} width="50" />
                  </td>
                  <td>
                    <button onClick={() => handleEditAnimal(animal)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteAnimal(animal._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

//rendering the form based on the type of state of animal we get with a switch case
const AnimalForm = ({ animal, type, onChange }) => {
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={animal.name}
        onChange={onChange}
        required
      />
      {type === "dogs" && (
        <>
          <input
            type="text"
            name="breed_group"
            placeholder="Breed Group"
            value={animal.breed_group}
            onChange={onChange}
          />
          <input
            type="text"
            name="size"
            placeholder="Size"
            value={animal.size}
            onChange={onChange}
          />
          <input
            type="text"
            name="lifespan"
            placeholder="Lifespan"
            value={animal.lifespan}
            onChange={onChange}
          />
        </>
      )}
      {type !== "birds" ? (
        <>
          <input
            type="text"
            name="origin"
            placeholder="Origin"
            value={animal.origin}
            onChange={onChange}
          />
          <input
            type="text"
            name="temperament"
            placeholder="Temperament"
            value={animal.temperament}
            onChange={onChange}
          />
          <input
            type="text"
            name="colors"
            placeholder="Colors (comma separated)"
            value={animal.colors}
            onChange={onChange}
          />
        </>
      ) : (
        <>
          <input
            type="text"
            name="species"
            placeholder="Species"
            value={animal.species}
            onChange={onChange}
          />
          <input
            type="text"
            name="family"
            placeholder="Family"
            value={animal.family}
            onChange={onChange}
          />
          <input
            type="text"
            name="habitat"
            placeholder="Habitat"
            value={animal.habitat}
            onChange={onChange}
          />
          <input
            type="text"
            name="place_of_found"
            placeholder="Place Found"
            value={animal.place_of_found}
            onChange={onChange}
          />
          <input
            type="text"
            name="diet"
            placeholder="Diet"
            value={animal.diet}
            onChange={onChange}
          />
        </>
      )}
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={animal.description}
        onChange={onChange}
        required
      />
      {type === "birds" && (
        <>
          <input
            type="number"
            name="weight_kg"
            placeholder="Weight (kg)"
            value={animal.weight_kg}
            onChange={onChange}
          />
          <input
            type="number"
            name="height_cm"
            placeholder="Height (cm)"
            value={animal.height_cm}
            onChange={onChange}
          />
        </>
      )}
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={animal.image}
        onChange={onChange}
        required
      />
    </>
  );
};

export default AdminPage;
