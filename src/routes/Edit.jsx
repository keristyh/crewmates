import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";
import among from '../assets/among.png';
// import "./Edit.css";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [crew, setCrew] = useState(null);


    useEffect(() => {
        supabase
            .from("Crewmate")
            .select("*")
            .eq("id", id)
            .single()
            .then(({ data }) => setCrew(data));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCrew((prev) => ({ ...prev, [name]: value }));
    };

    const save = async (e) => {
        e.preventDefault();
        await supabase.from("Crewmate").update({
            name: crew.name,
            speed: Number(crew.speed),
            color: crew.color,
        }).eq("id", id);
        navigate("/gallery");
    };

    const remove = async () => {
        await supabase.from("Crewmate").delete().eq("id", id);
        navigate("/gallery");
    };

    if (!crew) {
        return <p style={{ color: "#fff" }}>Loading…</p>;
    }

    return (
        <div className="create-page" onSubmit={save}>
            <h1>Update Crewmate: {crew.name}</h1>
            <img src={among}></img>

            <h2>Current Crewmate Info: </h2>
            <h2>Name: {crew.name}, Speed: {crew.speed}, Color: {crew.color}</h2>

            <form className="create-form" onSubmit={save}>
                <div className="item">
                    <label>Name:</label>
                    <input
                        name="name"
                        value={crew.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="item">
                    <label>Speek (mph):</label>
                    <input
                        type="number"
                        name="speed"
                        value={crew.speed}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="item">
                    <label>Color:</label>
                    {[
                        "Red", "Green", "Blue", "Purple", "Yellow", "Orange",
                        "Pink", "White", "Brown", "Black", "Rainbow",
                        "Light Green", "Turquoise",
                    ].map((col) => (
                        <label key={col} className="options">
                            <input
                                type="radio"
                                name="color"
                                value={col}
                                checked={crew.color === col}
                                onChange={handleChange}
                            />
                            {col}
                        </label>
                    ))}
                </div>

                <button type="submit" className="submit-btn edit">Update Crewmate</button>
                <button type="button" onClick={remove} className="submit-btn delete-btn">
                    Delete Crewmate
                </button>
            </form>
        </div>
    );
}

export default Edit;
