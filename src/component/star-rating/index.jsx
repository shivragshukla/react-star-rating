import { FaStar } from "react-icons/fa";
import { useState } from "react";
import './styles.css'

export default function StarRating({noOfRatings = 5}) {

	const [starRatingArray, setStarRatingArray] = useState([...Array(noOfRatings).keys()])
	const [rating, setRating] = useState(0);

	function handleRating(currentRating) {
		setRating(currentRating)
	}

	return (
		<div className="container">
			<h1 style={{ color: "#FFF" }}>Star Rating</h1>
			<div className="star-rating">
				{
					starRatingArray.map(index => 
						<span key={index}>
							<FaStar
								onClick={() => handleRating(index + 1)}
								className={ rating >= index+1 ? 'active' : '' }
							/>
						</span>
					)
				}
				
			</div>
		</div>
	);
}
