import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import {useNavigate, useParams, Link} from 'react-router-dom';

const DisplayPet = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [onePet, setOnePet] = useState([]);
    const [errors, setErrors] = useState([]);
    const [petNotFoundError, setPetNotFoundError] = useState("");
    const [state,setState]=useState(0)
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((response) => {
                console.log(response.data);
                setOnePet(response.data);
            })
            .catch((err) => {
                console.log(err.response);
                setPetNotFoundError(`Pet not found using that ID`);
            });
    }, [id]);

    const deleteHandler = () => {
        axios
        .delete(`http://localhost:8000/api/pets/${id}`)
        .then((response) => {
            console.log(response);
            console.log(response.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    const clickButton=(e)=>{

        setState(state+1)

    };

    return (
        <div className="onePet-component">
            <Link id="corner" to={`/`}>back to home</Link>
            <div id="adopt">
            <h4>Details about: {onePet.name}</h4>
            {errors.name ? <p>{errors.name.message}</p> : null}
            <button id="adoptbutton" class="btn btn-danger" onClick={deleteHandler}> Adopt {onePet.name} </button>
            </div>
            <div id="outline">
                <br></br>
                <div class="row">
                    <div class="col">
                        <div class="form-group col-md-3">
                            <strong>Pet type: </strong>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group col-md-3">
                            {onePet.type}
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col">
                        <div class="form-group col-md-3">
                            <strong>Description: </strong>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group col-md-3">
                            {onePet.description}
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col">
                        <div class="form-group col-md-3">
                            <strong>Skill(s): </strong>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group col-md-3">
                            <div id="skills">{onePet.skill1}</div> 
                            <div id="skills">{onePet.skill2}</div>
                            <div id="skills"> {onePet.skill3}</div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div id="likebutton">
                    <button class="btn btn-success" id="like" onClick={clickButton}>Like {onePet.name}</button>
                    <p>{state} like(s)</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayPet;