import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Shipment from "./Shipment";
import Inventory from "./Inventory";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="photo-bg">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/inventory" component={Inventory} />
					<Route path="/shipment" component={Shipment} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
