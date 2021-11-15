export const reducers = {
  inputEvent: (state, action) => {
    state.inputValue = action.payload;
  },
  loginInput: (state, action) => {
    const [name, value] = action.payload;
    if (name === "email") {
      state.login.email = value;
    } else if (name === "password") {
      state.login.password = value;
    }
  },
  signUpInput: (state, action) => {
    const [name, value] = action.payload;
    if (name === "username") {
      state.signup.username = value;
    } else if (name === "email") {
      state.signup.email = value;
    } else if (name === "password1") {
      state.signup.password1 = value;
    } else if (name === "password2") {
      state.signup.password2 = value;
    } else if (name === "company_name") {
      state.signup.company_name = value;
    } else if (name === "section_name") {
      state.signup.section_name = value;
    } else if (name === "post_name") {
      state.signup.post_name = value;
    }
  },
  signUpSubmit: (state) => {
    state.lists = state.signup;
  },
};
