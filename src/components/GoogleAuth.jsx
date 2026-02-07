import { useGoogleLogin } from "@react-oauth/google";

const useGoogleAuth = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google access token:", tokenResponse.access_token);
      // send token to backend here
    },
    onError: () => {
      console.log("Google Login Failed");
    },
  });

  return login;
};

export default useGoogleAuth;
