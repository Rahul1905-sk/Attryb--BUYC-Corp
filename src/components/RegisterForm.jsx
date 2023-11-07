import React, { useEffect, useState } from "react";
import * as Components from "./RegisterComponent";
import { BElink } from "./exportContent";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Loader from "./Loader";

const initialData = {
  name: "",
  email: "",
  password: "",
};
 
const RegisterForm = () => {
  const toast = useToast();
  const [signIn, toggle] = React.useState("true");
  
// const [active, setActive] = useState(false)
const navigate = useNavigate()
const [isLoading, setIsLoading] = useState(false)
  const [details, setDetails] = useState(initialData);
  const { login } = useAuth();
  

  const loginFun = async () => {
    
    setIsLoading(true)
  const res = await axios.post(`${BElink}/users/login`, details);
  console.log(res);
  setIsLoading(false)
   
    toast({
      // title: "Account login",
      description: res.data.msg,
      status: res.data.status,
      duration: 2000,
      position: 'top',
      isClosable: true,
    });
    if(res?.data?.token) {
     
      login(res.data.token, res.data.userID); 
      navigate('/');
    }
  };

  const SignUpFun = async () => {
    
    setIsLoading(false)
  const res = await axios.post(`${BElink}/users/register`, details);
  console.log(res.data.msg);
  setIsLoading(true)

    toast({
      // title: "Account created",
      description: res.data.msg,
      status:  res.data.status,
      duration: 2000,
      position: 'top',
      isClosable: true,
    });

    loginFun()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!details?.name?.length > 0) {
      loginFun();
    } else {
      SignUpFun();
    }
    console.log(details);
  };

  return (
    <div className="bgDiv">
        {isLoading && <Loader />}
      <div className="mainDiv">
        <Components.Container>
          <Components.SignUpContainer signinstatus={signIn}>
            <Components.Form onSubmit={handleSubmit}>
              <Components.Title>Create Account</Components.Title>
              <Components.Input
                type="text"
                placeholder="Name"
                required
                value={details.name}
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />
              <Components.Input
                type="email"
                placeholder="Email"
                required
                value={details.email}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
              <Components.Input
                type="password"
                required
                placeholder="Password"
                value={details.password}
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
              />
              <Components.Button type="submit">Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinstatus={signIn}>
            <Components.Form onSubmit={handleSubmit}>
              <Components.Title>Sign in</Components.Title>
              <Components.Input
                type="email"
                placeholder="Email"
                required
                value={details.email}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
              <Components.Input
                type="password"
                required
                placeholder="Password"
                value={details.password}
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
              />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
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
                <Components.GhostButton
                  onClick={() => {
                    toggle("true");
                    setDetails(initialData);
                  }}
                >
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinstatus={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter Your personal details and start journey with us
                </Components.Paragraph>
                <Components.GhostButton
                  onClick={() => {
                    toggle("false");
                    setDetails(initialData);
                  }}
                >
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
