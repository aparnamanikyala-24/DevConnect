import { Link } from "react-router-dom";

function Home(){

    return(
        <div>

            <h1>Welcome to DevConnect</h1>

            <p>Connect with developers</p>

            <Link to="/login">
                <button>
                    Login
                </button>
            </Link>


            <Link to="/register">
                <button>
                    Sign Up
                </button>
            </Link>

        </div>
    )
}

export default Home;