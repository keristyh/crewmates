import React from "react";
import among from '../assets/among.png';
import { useState } from "react";
import { supabase } from '../client'
import { useNavigate } from "react-router-dom";
import "./CreateView.css";


const CreateView = () => {
    const [crew, setCrew] = useState({
        name: "",
        speed: "",
        color: ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrew((prev) => ({ ...prev, [name]: value }))
    }

    const createCrew = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmate')
            .insert({ name: crew.name, speed: Number(crew.speed), color: crew.color })
            .select();

        navigate("/gallery");
    }


    return (
        <div className="create-page">
            <h1>Create a New Crewmate</h1>
            <img src={among}></img>

            <form className="create-form">
                <div className="item">
                    <label>Name:</label>
                    <input
                        name="name"
                        value={crew.name}
                        onChange={handleChange}
                        placeholder="Enter crewmate's name" required />
                </div>

                <div className="item">
                    <label>Speed (mph):</label>
                    <input
                        name="speed"
                        type="number"
                        value={crew.speed}
                        onChange={handleChange}
                        placeholder="Enter speed in mph" required />
                </div>

                <div className="item">
                    <label>Color:
                        {["Red", "Green", "Blue", "Purple", "Yellow", "Orange", "Pink", "White", "Brown", "Black", "Rainbow", "Light Green", "Turquoise"]
                            .map((col) => (
                                <label key={col} className="options">
                                    <input type="radio"
                                        name="color"
                                        value={col}
                                        checked={crew.color === col}
                                        onChange={handleChange} />
                                    {col}
                                </label>
                            ))}
                    </label>
                </div>


            </form>


            <button type="submit" onClick={createCrew} className="submit-btn">Create Crewmate</button>


        </div>
    );
};

export default CreateView;