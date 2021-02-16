import React from "react";
import {Link} from "react-router-dom";

// const Table = () => {
// 	function renderHead() {
// 		return (
// 			<thead>
// 				<tr>
// 					<th>ID</th>
// 					<th>Product</th>
// 					<th>Quantity</th>
// 				</tr>
// 			</thead>
// 		);
// 	}

// 	return (
// 		<div>
// 			<table className="table">{renderHead()}</table>
// 		</div>
// 	);
// };
// export default Table;

function Table({data}) {
	function renderHead() {
		return (
			<thead>
				<tr>
					<th>ID</th>
					<th>PRODUCT</th>
					<th>QUANTITY</th>
				</tr>
			</thead>
		);
	}

	function renderBody() {
		return (
			<tbody>
				{data.map((pieceOfData, index) => {
					return (
						<tr key={pieceOfData.id}>
							<td>{pieceOfData.id}</td>
							<td>{pieceOfData.product}</td>
							<td>{pieceOfData.quantity}</td>
						</tr>
					);
				})}
			</tbody>
		);
	}

	return (
		<div>
			<table className="table">
				{renderHead()}
				{renderBody()}
				{/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
			</table>
		</div>
	);
}

export default Table;
