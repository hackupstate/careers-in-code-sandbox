import React, {useState, useEffect} from "react";
import Table from "./Table";

const Inventory = () => {
	const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

	useEffect(() => {
		fetch("http://localhost:3001/inventory")
			.then(response => response.json())
			.then(json => setData(json));
	}, []);
	// useEffect( () => {
	// 	fetch('http://localhost:3001/inventory').then(data) {
	// 		console.log(data)
	// 	}.then(data2)
	//} )
	return (
		<div className="inventory-page">
			<h4>Inventory</h4>
			<Table data={data} />
			<button />
		</div>
	);
};
export default Inventory;
