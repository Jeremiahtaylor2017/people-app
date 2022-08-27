import { login, logout } from "../firebase";
import { Link } from "react-router-dom";

function Header({ user }) {
	return (
		<nav className="nav">
			<Link to="/">
				<div>People App</div>
			</Link>
			<div className="auth-links">
				{user ? (
					<>
						<div>Welcome, {user.displayName} </div>
						<div onClick={logout}>Log Out</div>
						<Link to="/people">
							<div>People</div>
						</Link>
					</>
				) : (
					<div onClick={login}>Log In</div>
				)}
			</div>
		</nav>
	);
}

export default Header;
