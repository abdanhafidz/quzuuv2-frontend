import loginStyle from "./style.module.css";
import Link from "next/link";
const login = async () => {
  return (
    <div className="container">
      <div className={`${loginStyle["card-login"]} ${"card-quzuu"}`}>
        <div className="card-content">
          <div className="aligner">
            <img
              src="https://abdanhafidz.com/qb/_public/assets/quzzulogo.png"
              className="img-logo-login"
            />
            <p className="mgs-0">Login Your Account</p>
          </div>
          <form className={loginStyle["login-form"]}>
            <div className={loginStyle["field-group"]}>
              <span className="t-800">Username</span>
              <input
                type="text"
                className={loginStyle["input-login"]}
                name="username"
                required
                placeholder="Enter your username"
              />
              <div id="msg-username"></div>
            </div>
            <div className={loginStyle["field-group"]}>
              <span className="t-800">Password</span>
              <input
                type="password"
                className={loginStyle["input-login"]}
                name="password"
                placeholder="Enter your password"
                required
              />
              <div id="msg-password"></div>
            </div>
            <div
              className={`${loginStyle["field-login-btn"]} ${loginStyle["field-group"]}`}
            >
              <button type="button" className="btn btn-primary btn-block">
                Sign In
              </button>
            </div>
            <div className={`${"aligner"} ${loginStyle["field-group"]}`}>
              <Link
                href={{
                  pathname: "/register",
                }}
                className={loginStyle["register-link"]}
              >
                Create An Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
