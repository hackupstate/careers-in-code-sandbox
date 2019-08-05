import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>
				<li>
					<Link to="/posts/2018/06">Posts</Link>
				</li>
				<li>
					<Link to="/admin">Admin</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
