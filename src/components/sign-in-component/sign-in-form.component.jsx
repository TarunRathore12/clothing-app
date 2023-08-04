import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  signInWithGoogleRedirect,
  getGoogleRedirectResults,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./sign-in-form.styles.scss";
import { useEffect } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFieldsData, setFormFieldsData] = useState(defaultFormFields);
  const { email, password } = formFieldsData;

  // not required since we are using onAuthStateChanges
  // const { setCurrentUser } = useContext(UserContext);

  // useEffect(() => {
  //   const abcd = async () => {
  //     const res = await getGoogleRedirectResults();
  //     console.log(res);
  //     if (res.user.email.includes("@infobeans.com") === false) {
  //       signOutUser();
  //       alert("HEY, Please login with your Official ID !!!");
  //     }
  //   };
  //   abcd();
  // }, []);

  const logGoogleUser = async () => {
    const res = await signInWithGooglePopUp();
    // console.log(
    //   "this are the details here",
    //   res.user.email.includes("@infobeans.com"),
    //   res
    // );
    console.log("response here.....", res);
    if (!res.user.email.includes("@infobeans.com")) {
      signOutUser();
      alert("HEY, Please login with your Official ID !!!");
    }
  };

  // const logGoogleUserWithRedirect = async () => {
  //   const res = await signInWithGoogleRedirect();
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      alert(error.code);
      console.log("user creation encountered an error", error.code);
    }
    setFormFieldsData(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFieldsData({ ...formFieldsData, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>ALREADY HAVE AN ACCOUNT ?</h2>
      <span>Login with Email & Password</span>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Email ID"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Submit</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUser}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
