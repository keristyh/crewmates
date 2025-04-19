import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";
import pic from "../assets/among.png";
// import "./Detail.css";

const Detail = () => {
    const { id } = useParams();
    const [crew, setCrew] = useState(null);

    useEffect(() => {
        supabase
            .from("Crewmate")
            .select("*")
            .eq("id", id)
            .single()
            .then(({ data }) => setCrew(data));
    }, [id]);

    if (!crew) return <p>Loading…</p>;

    return (
        <div className="detail-page">
            <h1> Crewmate: {crew.name}</h1>
            <h1>Stats:</h1>
            <h2>Color: {crew.color}</h2>
            <h2>Speed: {crew.speed} mph</h2>
            <img src={pic} width="350px" height="200px"></img>

            <div className="submit-btn btn">
                <Link to={`/edit/${crew.id}`} className="edit-btn">Edit this crewmate</Link>
            </div>
        </div>
    );
}

export default Detail;
