import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const [isValidUser, setIsValidUser] = useState(false);

  const onChange = (value: string | null) => {
    setIsValidUser(true);
  };

  return (
    <>
      <form onSubmit={() => alert("clicou")}>
        <h1>
          <img alt="React Logo" src={reactLogo} />
          <img alt="Vite Logo" src={viteLogo} />
        </h1>
        <h2>Welcome to Vite + React + TypeScript + reCaptcha v3</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(e) => {
              setIsValidUser(e.target.value === "admin");
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
        <button type="submit" disabled={!isValidUser}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
