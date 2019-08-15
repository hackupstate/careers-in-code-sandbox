import React, {useState, useEffect} from "react";

const Artwork = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://picsum.photos/v2/list?page=2&limit=20")
			.then(response => response.json())
			.then(json => setData(json));
	}, []);
	return (
		<div className="artContianer">
			{data.map(function(artwork, index) {
				return (
					<div key={artwork.id} className="canvas">
						<img id="art" src={`${artwork.download_url}`} alt="" />
					</div>
				);
			})}
		</div>
	);
};
export default Artwork;
