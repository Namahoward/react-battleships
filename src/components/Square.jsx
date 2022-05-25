import React from "react";

const Square = ({
	gameState,
	row,
	column,
	position,
	playerShipPositions,
	setPlayerShipPositions,
	config,
	shipSelected,
	isShip,
}) => {
	const squareClick = (position) => {
		if (gameState === "shipClicked") {
			const shipSelectedSize = config.shipSizes[shipSelected];
			let positions = [];
			for (let i = 0; i < shipSelectedSize; i++) {
				positions.push(position + i);
			}

			let currentObject = { ...playerShipPositions };
			currentObject[shipSelected] = positions;
			setPlayerShipPositions(currentObject);
		}
	};

	if (isShip) {
		return (
			<div
				className={`square column-${column} row-${row} ship`}
				onClick={() => squareClick(position, shipSelected)}
			></div>
		)
	} else {
		return (
			<div
				className={`square column-${column} row-${row} water`}
				onClick={() => squareClick(position, shipSelected)}
			></div>
		);
	}
};

export default Square;
