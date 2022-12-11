import React, { useState } from "react";

const Skills= () => {
    const [Skills,setSkills]=useState("No skill");
    const [items, setItems]=useState([]);

    const newSkill = (event) => {
        setSkills(event.target.value);
    }
    const addSkills = () => {
        setItems((initialSKills)=>{
            return [...initialSKills, Skills];
        })
    };

    return(
        <>
        <h3>Skills</h3>
        <input type="text" placeholder="Add a new skill" onChange={newSkill}></input>
        <button onClick={addSkills}> + </button>
        <ol>
            {items.map( (itemval) =>{
                return <li>{itemval}</li>
            })}
        </ol> 
        </>
    )

} 

export default Skills;
