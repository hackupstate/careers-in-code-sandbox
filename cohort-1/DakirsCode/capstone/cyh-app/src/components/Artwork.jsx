import React, {useState, useEffect} from "react";

const Artwork = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8088/products")
			.then(response => response.json())
			.then(json => setData(json));
	}, []);
	return (
		<div className="artContianer">
			{data.map(function(artwork, index) {
				return (
					<div key={artwork.id} className="canvas">
						<img id="art" src={`${artwork.url}`} alt="" />
					</div>
				);
			})}
		</div>
	);
};
export default Artwork;
