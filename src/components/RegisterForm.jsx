import React, { useState } from "react";
import * as Components from "./RegisterComponent";

const initialData = {
    name: '',
    email: "",
    password: ""
}


const RegisterForm = () => {

  const [signIn, toggle] = React.useState("true");

const [details, setDetails] = useState(initialData)


const handleSubmit = (e) => {
    console.log(details);
}

  return (
    <div className="bgDiv">

<div className="mainDiv">

    <Components.Container >
      <Components.SignUpContainer signinstatus={signIn}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" value={details.name} onChange={(e)=> setDetails({...details, name: e.target.value})}  />
          <Components.Input type="email" placeholder="Email" value={details.email} onChange={(e)=> setDetails({...details, name: e.target.value})} />
          <Components.Input type="password" placeholder="Password" value={details.password} onChange={(e)=> setDetails({...details, password: e.target.value})} />
          <Components.Button type="submit" >Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinstatus={signIn}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" value={details.email} onChange={(e)=> setDetails({...details, email: e.target.value})} />
          <Components.Input type="password" placeholder="Password"  value={details.password} onChange={(e)=> setDetails({...details, password: e.target.value})} />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button type="submit">Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinstatus={signIn}>
        <Components.Overlay signinstatus={signIn}>
          <Components.LeftOverlayPanel signinstatus={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => {toggle("true") 
        setDetails(initialData)
        }}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinstatus={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => {toggle("false")
         setDetails(initialData)}}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
</div>
    </div>
  );
};

export default RegisterForm;

 