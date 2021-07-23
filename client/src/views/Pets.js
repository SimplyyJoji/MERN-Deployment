import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from '@reach/router'

//useState(null) we need state and we need to loop so store in empty array
//Remember a leading  / for all 
const Pets = (props) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:5000/api/pets")
    .then((res) => {
      setPets(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  const handleLikeCount = (likedPet) => {
    const updateBody = {
      likeCount: likedPet.likeCount + 1,
    };

    // re-use update route since it can be used to update any part
    axios
      .put(`http://localhost:5000/api/pets/${likedPet._id}`, updateBody)
      .then((res) => {
        const updatedPets = pets.map((pet) => {
          if (likedPet._id === pet._id) {
            return res.data; // the updated post from DB.
          }
          return pet;
        });

        setPets(updatedPets);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Pet Shelter</h1>
      <h2>These pets are looking for a good home</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {pets.map((pet) => {
        return <tr key={pet._id}>
        <td>{pet.name}</td>
        <td>{pet.type}</td>
        <span>
                Likes: {pet.likeCount}{" "}
                <span
                  onClick={(e) => {
                    handleLikeCount(pet);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  &#8593;
                </span>
                  </span>

        <td><Link to={"/pets/" + pet._id}>{pet.name}</Link> | </td>
        <Link to={"/pets/" + pet._id + "/edit"}>Edit</Link>
        </tr>
         
      })}
        </tbody>
      </table>
     
    </div>
  );
}
export default Pets;