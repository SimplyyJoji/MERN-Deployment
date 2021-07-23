import React, {useState, useEffect} from "react";
import axios from 'axios';
import { navigate } from "@reach/router";

const EditPet = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [skillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("");
  const [errors, setErrors] = useState(null);


  useEffect(() => {
    axios.get("http://localhost:5000/api/pets/" + props.id)
    .then((res) => {
      setName(res.data.name);
      setType(res.data.type);
      setDesc(res.data.desc);
      setSkillOne(res.data.skillOne);
      setSkillTwo(res.data.skillTwo);
      setSkillThree(res.data.skillThree);
    })
    .catch((err) => {
      console.log(err)
      setErrors(err.response?.data?.errors);
    });
  }, [props.id]);


  const handlerEditPetSubmit = (event) => {
    event.preventDefault();

    const editPet = {
      name,
      type,
      desc,
      skillOne,
      skillTwo,
      skillThree,

    }

    axios.put("http://localhost:5000/api/pets/" + props.id, editPet)
    .then((res) => {
      navigate("/pets/" + res.data._id)
    })
    .catch((err) => {
      console.log(err)
      setErrors(err.response?.data?.errors);
    });


  };

  return (
    <form 
      onSubmit={(e) => {
        handlerEditPetSubmit(e);
      }}
    >
      <div>
      <label>Pet Name:</label>
      {errors?.name && (
        <span style={{ color: "red" }}>{errors.name.message} </span>
      )}
      
      <input 
      onChange={(e) => {
        setName(e.target.value);
      }}
      type="text"
      value={name} 
      />
      </div>
      <div>
      <label>Pet Type:</label>
      {
      errors?.type && (
        <span style={{ color: "red" }}>{errors.type.message} </span>
      )}
      <input onChange={(e) => {
        setType(e.target.value);
      }}
      type="text"
      value={type}  
      />
      </div>
      <div>
      <label>Pet Description:</label>
      {
      errors?.desc && (
        <span style={{ color: "red" }}>{errors.desc.message} </span>
      )}
      <input input onChange={(e) => {
        setDesc(e.target.value);
      }}
      type="text"
      value={desc}  
      ></input>
      </div>

      <div>
      <label>Skill 1:</label>
      {
      errors?.skillOne && (
        <span style={{ color: "red" }}>{errors.skillOne.message} </span>
      )}
      <input onChange={(e) => {
        setSkillOne(e.target.value);
      }}
      type="text"
      value={skillOne}  
      ></input>
      </div>
      <div>
      <label>Skill 2:</label>
      {
      errors?.skillTwo && (
        <span style={{ color: "red" }}>{errors.skillTwo.message} </span>
      )}
      <input onChange={(e) => {
        setSkillOne(e.target.value);
      }}
      type="text"
      value={skillTwo}  
      ></input>
      </div>
      <div>
      <label>Skill 3:</label>
      {
      errors?.skillOne && (
        <span style={{ color: "red" }}>{errors.skillThree.message} </span>
      )}
      <input onChange={(e) => {
        setSkillThree(e.target.value);
      }}
      type="text"
      value={skillThree}  
      ></input>
      </div>
      <button>Submit</button>
    </form>

  ) 
};

export default EditPet;


