import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditPet = () => {
    const { id } = useParams();
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState([]);
    const [petNotFoundError, setPetNotFoundError] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/pets/${id}`)
        .then((response) => {
            console.log(response.data);
            setPetName(response.data.name);
            setPetType(response.data.type);
            setPetDescription(response.data.description);
            setSkill1(response.data.skill1);
            setSkill2(response.data.skill2);
            setSkill3(response.data.skill3);
        })
        .catch((err) => {
            console.log(err.response);
            setPetNotFoundError(`Pet not found using that ID`);
            
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios
        .put(`http://localhost:8000/api/pets/${id}`, { 
            name: petName,
            type: petType,
            description: petDescription,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3
        })
        .then((response) => {
            console.log(response);
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
            <h4>Edit {petName}</h4>
            <form id="outline" onSubmit={submitHandler}>
                <div class="row" id="skill">
                    Skills (optional):
                </div>
                <br></br>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label htmlFor="name">Pet Name: </label>
                            <input class="form-control" type="text" id="name" value={petName}
                            onChange={(e) => setPetName(e.target.value)}/>
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
                            <input class="form-control" type="text" id="type" value={petType}
                            onChange={(e) => setPetType(e.target.value)}/>
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
                            <input class="form-control" type="text" id="description" value={petDescription}
                            onChange={(e) => setPetDescription(e.target.value)}/>
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
                <button class="btn btn-primary" type="submit" > Edit Pet </button>
                </div>
                <br></br>
            </form>
        </div>
    );
};

export default EditPet;