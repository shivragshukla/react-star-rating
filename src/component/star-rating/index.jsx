import { FaStar } from "react-icons/fa";
import { useState } from "react";
import './styles.css'

export default function StarRating({noOfRatings = 5}) {

	const [starRatingArray, setStarRatingArray] = useState([...Array(noOfRatings).keys()])
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	function handleMouseHover(currentHover) {
		setHover(currentHover)
	}
	function handleMouseLeave() {
		setHover(rating)
	}
	function handleRating(currentRating) {
		setRating(currentRating)
	}

	return (
		<div className="container">
			<h1 style={{ color: "#FFF" }}>Star Rating</h1>
			<div className="star-rating">
				{
					starRatingArray.map(index => {
						index += 1;  
						return (
							<span key={index}>
								<FaStar
									onClick={() => handleRating(index)}
									onMouseEnter={() => handleMouseHover(index)}
									onMouseLeave={() => handleMouseLeave()}
									className={ index <= ( hover || rating ) ? 'active' : '' }
								/>
							</span>
						)
					})
				}
				
			</div>
		</div>
	);
}
