import { Button } from "flowbite-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const OAuth = () => {
    const handleGoogleClick = async ()=>{
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
          const resultsFromGoogle = await signInWithPopup(auth, provider);
          await handleLogin(resultsFromGoogle);
        } catch (error) {
          console.error('Error during Google sign-in:', error);
          handleLoginError(error);
        }
    }
  return (
    <Button type="button" gradientDuoTone="pinkToOrange" outline onClick={handleGoogleClick}>
      Continue with <FcGoogle className="ml-1 h-5 w-5" />
      oogle
    </Button>
  );
};

export default OAuth;
