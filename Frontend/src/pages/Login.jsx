import { useState } from "react";
import API from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {

        try {

            const response = await API.get("/api/users");

            const user = response.data.find(
                (u) => 
                u.email === email && 
                u.password === password
            );
            if(user){

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert("Login Successful");

    window.location.href="/profile";

}

           
            else{
                alert("Invalid Credentials");
            }

        }
        catch(error){

            console.log(error);
            alert("Login Failed");

        }
    };


    return (
        <div>

            <h2>Login</h2>

            <input
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button onClick={loginUser}>
                Login
            </button>

        </div>
    );
}

export default Login;