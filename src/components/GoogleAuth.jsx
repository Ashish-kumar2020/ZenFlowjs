import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const useGoogleAuth = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google access token:", tokenResponse.access_token);
      // send token to backend here
      navigate("/home");
    },
    onError: () => {
      console.log("Google Login Failed");
    },
  });

  return login;
};

export default useGoogleAuth;
