import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const SinglePet = (props) => {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pets/" + props.id)
    .then((res) => {
      setPet(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [props.id])

  const handleDelete = (delId) => {
    axios
    .delete("http://localhost:5000/api/pets/" + delId)
    .then((res) => {
      //At this point it is deleted
      navigate("/pets")

    })
    .catch((err) => {
      console.log(err)
    })
  }

  if (pet === null) {
    return "Loading...";
  }
//product={product} gets the data past from the component to view with props
  return ( <div>
    <h1>Pet Shelter</h1>
    <h2>Details about: {pet.name}</h2>
    
    <h3>Pet Type: {pet.type}</h3>
    <h3>Description: {pet.desc}</h3>
    <h3>Skills: {pet.skillOne}  {pet.skillTwo}  {pet.skillThree}</h3>
    <div>
    <Link to={"/pets/" + pet._id + "/edit"}>Edit</Link>
    <button onClick={(e) => {
            handleDelete(pet._id);
          }}
        style={{ color: "red"}}>Adopt {pet.name}</button>
        </div>
  </div> 
  )
}

export default SinglePet;