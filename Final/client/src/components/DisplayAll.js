import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from 'react-router-dom';

const DisplayAll = () => {

    const [allPets, setAllPets] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/pets")
        .then((response) => {
            console.log(response.data);
            setAllPets(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);


    return (
        <div className="container">
            <Link id="corner" to="/new">add a pet to the shelter</Link>
            <div className="row">
                <div className="col-4">
                <h4>These pets are looking for a good home</h4>
                <table className="table table-striped table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPets.map((pet, index) => {
                            return (
                                <tr key={pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                    <Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/edit/${pet._id}`}>edit</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default DisplayAll;