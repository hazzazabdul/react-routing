import Style from "./Login.module.css";

function Login() {

  const loggedIn = (event) => {
    event.preventDefault()
  }
  return (
    <div className={Style.login__section}>
      <div className={Style.login__container}>
      <h2>Login </h2>
      <form
        className={Style.form__group}
        onSubmit={(event)=> loggedIn(event)}
      >
        <input
          type="email"
          id="email"
          required
          placeholder="Email"
        />
        <input
          type="password"
          id="password"
          required
          placeholder="Password"
        />
        <button className={Style.login__btn}>Log In</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
