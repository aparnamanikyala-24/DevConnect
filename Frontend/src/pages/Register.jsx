import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";


function Register() {

    const navigate = useNavigate();


    const [user, setUser] = useState({

        name: "",
        email: "",
        password: "",
        skills: "",
        bio: "",
        github: "",
        linkedin: ""

    });


    const handleChange = (e) => {

        setUser({

            ...user,
            [e.target.name]: e.target.value

        });

    };


    const registerUser = async () => {

        try {

            const response = await API.post("/users", user);

            console.log(response.data);


            alert("Registration Successful. Please Login");


            // Go to login page after registration
            navigate("/login");


        }
        catch(error) {

            console.log(error);

            alert("Registration Failed");

        }

    };


    return (

        <div>

            <h2>Create Account</h2>


            <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />


            <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />


            <input
                name="password"
                placeholder="Password"
                type="password"
                onChange={handleChange}
            />


            <input
                name="skills"
                placeholder="Skills"
                onChange={handleChange}
            />


            <input
                name="bio"
                placeholder="Bio"
                onChange={handleChange}
            />


            <input
                name="github"
                placeholder="Github Link"
                onChange={handleChange}
            />


            <input
                name="linkedin"
                placeholder="LinkedIn Link"
                onChange={handleChange}
            />


            <button onClick={registerUser}>
                Register
            </button>


        </div>

    );

}


export default Register;