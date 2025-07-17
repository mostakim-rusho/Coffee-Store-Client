import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {

const {createUser} =useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email =form.email.value;
    const password = form.password.value;
    console.log(email,password);
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      const user = {email};
        fetch("http://localhost:5000/user",{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            alert("succesfully done")
        }
    })
    })
    .catch(error=>{
      console.log(error)
    })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            {/* ✅ Use <form> instead of <fieldset> */}
            <form onSubmit={handleSignUp} className="form">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
