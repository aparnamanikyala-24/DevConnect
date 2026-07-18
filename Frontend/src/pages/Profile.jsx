import React from "react";

function Profile() {

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.removeItem("user");
        alert("Logged Out Successfully");
        window.location.href = "/";
    };

    if (!user) {
        return <h2>Please Login First</h2>;
    }

    return (
        <div style={{ padding: "30px" }}>

            <h1>Developer Profile</h1>

            <hr />

            <h2>{user.name}</h2>

            <p><strong>Email:</strong> {user.email}</p>

            <p><strong>Skills:</strong> {user.skills}</p>

            <p><strong>Bio:</strong> {user.bio}</p>

            <p><strong>GitHub:</strong> {user.github}</p>

            <p><strong>LinkedIn:</strong> {user.linkedin}</p>

            <br />

            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default Profile;