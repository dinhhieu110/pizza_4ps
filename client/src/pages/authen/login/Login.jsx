import { CheckBox } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./Login.css";
// import Register from "./Register";
const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>PIZZA 4P'S</h1>
          <p>Delivering Wow, Sharing Happiness.</p>
        </div>
        <div className="right">
          <div className="wrapper">
            <form>
              {/* <input type="text" placeholder="Username" /> */}
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Log in</button>
              <a href="home">Forgotten password?</a>
              <hr />
              <Link to="/register" class="btn-regis">
                Create new account
              </Link>
            </form>
          </div>
          <p>
            <strong>Create a Page</strong> for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
