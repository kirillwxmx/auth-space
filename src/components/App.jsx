import "../assets/style.scss";
import { HiOutlineMail } from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function App() {
	return (
		<div className="wrapper">
			<div className="background"></div>
			<div className="auth">
				<div>
					<p className="auth-title">SIGN IN</p>
					<p className="auth-subtitle">Sign in with email address</p>
					<form className="auth-form">
						<div>
							<HiOutlineMail />
							<input
								type="email"
								placeholder="Yourname@gmail.com"
							/>
						</div>
						<button type="submit">Sign Up</button>
					</form>
					<hr />
					<p className="with">Or continue with</p>
					<ul className="social">
						<li>
							<FaGoogle /> <span>Google</span>
						</li>
						<li>
							<FaFacebook /> <span>Facebook</span>
						</li>
					</ul>
					<p className="term">
						By registering you with our{" "}
						<span>Terms and Conditions</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
