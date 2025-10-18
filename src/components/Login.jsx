import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [moblie, setMoblie] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [code,setCode] = useState(0);

  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        console.log(userData.user);
        navigate("/dasboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleloginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account consent", // forces account chooser every time
    });

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate("/dasboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleloginWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account consent", // forces account chooser every time
    });

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate("/dasboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleloginWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account consent", // forces account chooser every time
    });

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate("/dasboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

    const handleloginWithGithub = () => {
    const provider = new GithubAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account consent", // forces account chooser every time
    });

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate("/dasboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendOtp=()=>{
    const appVerifier = new RecaptchaVerifier(auth,'abc',{"size":"invisible"});
    signInWithPhoneNumber(auth,moblie,appVerifier)
    .then(res=>{
          console.log("otp sent");
          console.log(res);
          window.confirmationResult = res;
          setIsOtpSent(true);
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const confirmoTP =()=>{
    window.confirmationResult.confirm(code).then(res=>{
      console.log(res)
      navigate("/dasboard")
    }).catch(err=>{console.log(err)})
  }

  return (
    <>
      <div className="heading">
        <h1 style={{color:"#ffffff"}}>Log-in Page.</h1>
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
          style={{ padding: "10px",backgroundColor:"#353535c5",border:"none",borderRadius:"8px" }}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          style={{ padding: "10px",backgroundColor:"#353535c5",border:"none",borderRadius:"8px" }}
        />
        <button type="submit" style={{backgroundColor:"#353535c5",color:"#ffffff3c"}}>Submit</button>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <button type="button" onClick={handleloginWithGoogle} style={{borderRadius:"50%", width:"50px", height:"50px", display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#353535c5"}}>
<i className="fa-brands fa-google" style={{fontSize:"24px",color:"#ffffff3c"}}></i>
        </button>
        <button type="button" onClick={handleloginWithFacebook} style={{borderRadius:"50%", width:"50px", height:"50px", display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#353535c5"}}>
          <i className="fa-brands fa-facebook-f" style={{fontSize:"24px",color:"#ffffff3c"}}></i>
        </button>
        <button type="button" onClick={handleloginWithTwitter} style={{borderRadius:"50%", width:"50px", height:"50px", display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#353535c5"}}>
          <i className="fa-brands fa-x-twitter" style={{fontSize:"24px",color:"#ffffff3c"}}></i>
        </button>
        <button type="button" onClick={handleloginWithGithub} style={{borderRadius:"50%", width:"50px", height:"50px", display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#353535c5"}}>
          <i className="fa-brands fa-github" style={{fontSize:"24px",color:"#ffffff3c"}}></i>
        </button>
        
        </div>
        {
          !isOtpSent? <div>
            <div style={{backgroundColor:"#353535c5",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"}}>
          <input type="tel" placeholder="Enter your mobile Number" onChange={(e)=>{setMoblie(e.target.value)}}
                    style={{ padding: "10px",backgroundColor:"transparent",border:"none",outline:"none" }}></input>
          <button type="button" onClick={sendOtp}  style={{ padding: "10px",backgroundColor:"#555555ff",border:"none" }}>Send OTP</button>
        </div>
        <div id="abc"></div>
          </div>
        :
        <div>
          <h3>Confirm Your Otp</h3>
          <div style={{backgroundColor:"#353535c5",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"}}>
          <input type="tel" placeholder="Confirm your otp" onChange={(e)=>{setCode(e.target.value)}}
                    style={{ padding: "10px",backgroundColor:"transparent",border:"none",outline:"none" }}/>
          <button type="button" onClick={confirmoTP} style={{ padding: "10px",backgroundColor:"#555555ff",border:"none" }}>Confirm</button></div>
        </div>
        }
      </form>
    </>
  );
}

export default Login;
