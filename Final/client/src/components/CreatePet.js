import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatePet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/pets", { 
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
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
    
    return (
        <div class="container">
        <Link id="corner" to={`/`}>back to home</Link>
            <h4>Know a pet needing a home?</h4>
            <form id="outline" onSubmit={handleSubmit}>
                <div class="row" id="skill">
                    Skills (optional):
                </div>
                <br></br>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label htmlFor="name">Pet Name: </label>
                            <input class="form-control" type="text" id="name" value={name}
                            onChange={(e) => setName(e.target.value)}/>
                            {errors.name ? <p>{errors.name.message}</p> : null}
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label htmlFor="skill1">Skill 1: </label>
                            <input class="form-control" type="text" id="skill1" value={skill1}
                            onChange={(e) => setSkill1(e.target.value)}/>
                            {errors.skill1 ? <p>{errors.skill1.message}</p> : null}
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label htmlFor="type">Pet Type: </label>
                            <input class="form-control" type="text" id="type" value={type}
                            onChange={(e) => setType(e.target.value)}/>                 
                            {errors.type ? <p>{errors.type.message}</p> : null}
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label htmlFor="skill2">Skill 2: </label>
                            <input class="form-control" type="text" id="skill2" value={skill2}
                            onChange={(e) => setSkill2(e.target.value)}/>
                            {errors.skill2 ? <p>{errors.skill2.message}</p> : null}
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label htmlFor="description">Pet Description: </label>
                            <input class="form-control" type="text" id="description" value={description}
                            onChange={(e) => setDescription(e.target.value)}/>
                            {errors.description ? <p>{errors.description.message}</p> : null}
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label htmlFor="skill3">Skill 3: </label>
                            <input class="form-control" type="text" id="skill3" value={skill3}
                            onChange={(e) => setSkill3(e.target.value)}/>
                            {errors.skill3 ? <p>{errors.skill3.message}</p> : null}
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="col">
                <button class="btn btn-primary" type="submit" > Add Pet </button>
                </div>
                <br></br>
            </form>
        </div>
    );
};

export default CreatePet;