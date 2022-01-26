import React, { useEffect, useRef, useReducer } from "react";

const ACTIONS = {
  EMAIL_INPUT: "EMAIL_INPUT",
  PASSWORD_INPUT: "PASSWORD_INPUT",
  SUBMIT_BTN: "SUBMIT_BTN",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.EMAIL_INPUT:
      return { ...state, emailInputValue: action.payload };
    // break;
    case ACTIONS.PASSWORD_INPUT:
      return { ...state, passwordInputValue: action.payload };

    default:
      return {
        emailInputValue: "",
        passwordInputValue: "",
      };
  }
};

const FormComponentUseReducer = ({ setIsLoggedIn }) => {
  const submitRef = useRef();
  const [formState, formDispatch] = useReducer(formReducer, {
    emailInputValue: "",
    passwordInputValue: "",
  });
  useEffect(() => {
    const inputTimer = setTimeout(() => {
      if (!formState.emailInputValue || !formState.passwordInputValue) {
        submitRef.current.disabled = true;
      } else {
        submitRef.current.disabled = false;
      }
      console.log("useEffect3");
    }, 600);

    return () => {
      console.log("clear");
      clearTimeout(inputTimer);
    };
  }, [formState.emailInputValue, formState.passwordInputValue]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) =>
              formDispatch({
                type: ACTIONS.EMAIL_INPUT,
                payload: e.target.value,
              })
            }
            // onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) =>
              formDispatch({
                type: ACTIONS.PASSWORD_INPUT,
                payload: e.target.value,
              })
            }
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary"
          ref={submitRef}
          onClick={formSubmitHandler}
        />
      </form>
    </div>
  );
};

export default FormComponentUseReducer;
