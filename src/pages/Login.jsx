import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, isAuth } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    
    try {
      let res = await axios.post(`https://reqres.in/api/login`, user);
      let data = res.data;
      loginUser(res.data.token);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  if (isAuth) return <Navigate to={"/"} />;

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
