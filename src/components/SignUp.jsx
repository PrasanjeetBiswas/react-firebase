import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="heading">
        <h1>Sign Up Page.</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          style={{ padding: "10px",backgroundColor:"#353535c5",color:"#ffffff3c",border:"none",borderRadius:"8px"  }}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          style={{ padding: "10px",backgroundColor:"#353535c5",color:"#ffffff3c",border:"none",borderRadius:"8px"  }}
        />
        <button type="submit" style={{backgroundColor:"#353535c5",color:"#ffffff3c"}}>Submit</button>
      </form>
    </>
  );
}

export default SignUp;
