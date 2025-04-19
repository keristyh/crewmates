import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "../client";
import crew from "../assets/crew.svg";
import "./Gallery.css";

const Gallery = () => {
    const [rows, setRows] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchRows = async () => {
            const { data, error } = await supabase
                .from("Crewmate")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) console.error(error.message);
            else setRows(data);
        };
        fetchRows();
    }, [location.pathname]);

    if (!rows.length) return (
        <div className="empty">
            <h1>Your Crewmate Gallery!</h1>
            <p style={{ color: "#fff" }}>You haven't made a crewmate yet!</p>
            <Link to="/create" className="edit-btn">Create a Crewmate here!</Link>
        </div>
    );

    return (
        <div className="gallery-page">
            <h1>Your Crewmate Gallery!</h1>
            <div className="gallery-grid">
                {rows.map((c) => (
                    <div key={c.id} className="card">
                        <Link to={`/crewmate/${c.id}`} className="card-link">
                            <div className="crew-detail">
                                <img src={crew} className="img"></img>
                                <p className="name">Name of Crewmate: {c.name}</p>
                                <p className="speed">Speed of Crewmate: {c.speed} mph</p>
                                <p className="color">Color of Crewmate: {c.color}</p>
                            </div>
                        </Link>

                        <Link to={`/edit/${c.id}`} className="edit-btn">Edit</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;