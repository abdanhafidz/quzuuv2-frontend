import loginStyle from "../login/style.module.css";
import Link from "next/link";

const register = async () => {
  
  return (
    <div className="container">
      <div className={`${loginStyle["card-login"]} ${"card-quzuu"}`}>
        <div className="card-content">
          <div className="aligner">
            <img
              src="https://abdanhafidz.com/qb/_public/assets/quzzulogo.png"
              className="img-logo-login"
            />
            <p className="mgs-0">Create An Account</p>
          </div>
          <form className={loginStyle["login-form"]}>
            <div className={loginStyle["field-group"]}>
              <span className="t-800">Name</span>
              <input
                type="text"
                className={loginStyle["input-login"]}
                name="name"
                required
                placeholder="Enter your name"
              />
              <div id="msg-name"></div>
            </div>
            <div className={loginStyle["field-group"]}>
              <span className="t-800">Email</span>
              <input
                type="email"
                className={loginStyle["input-login"]}
                name="email"
                required
                placeholder="Enter your email"
              />
              <div id="msg-name"></div>
            </div>
            <div className={loginStyle["field-group"]}>
              <span className="t-800">Phone Number</span>
              <input
                type="number"
                className={loginStyle["input-login"]}
                name="phone"
                required
                placeholder="08..."
              />
              <div id="msg-name"></div>
            </div>
            <div className={loginStyle["field-group"]}>
              <span className="t-800">Username</span>
              <input
                type="text"
                className={loginStyle["input-login"]}
                name="username"
                placeholder="Create your username"
                required
              />
              <div id="msg-password"></div>
            </div>
            <div className={loginStyle["field-group"]}>
              <span className="t-800">Password</span>
              <input
                type="password"
                className={loginStyle["input-login"]}
                name="password"
                placeholder="Create your password"
                required
              />
              <div id="msg-password"></div>
            </div>
            <div className={loginStyle["field-group"]}>
              <span className="t-800">Confirm Password</span>
              <input
                type="password"
                className={loginStyle["input-login"]}
                name="confirm-password"
                placeholder="Create your password"
                required
              />
              <div id="msg-password"></div>
            </div>
            <div
              className={`${loginStyle["field-login-btn"]} ${loginStyle["field-group"]}`}
            >
              <button type="button" className="btn btn-primary btn-block">
                Register
              </button>
            </div>
            <div className={`${"aligner"} ${loginStyle["field-group"]}`}>
              <Link
                href={{
                  pathname: "/login",
                }}
                className={loginStyle["register-link"]}
              >
                Sign In to Your Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
