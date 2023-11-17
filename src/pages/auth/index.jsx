import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from 'firebase/auth'
export const Auth = () => {
    const signInWithGoogle = async() => {
        
    }
  return (
    <div className="login-page">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={SignInwithGoogle}>
        {" "}
        Sign In With Google
      </button>
    </div>
  );
};
