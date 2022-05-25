import React, { useState } from "react";

const Fleet = ({ gameState, setGameState, setShipSelected, config }) => {
	const selectShip = (e) => {
		const ship = e.target.parentNode;
		setShipSelected(ship.id);
		ship.classList.add("active");
		setGameState("shipClicked");
	};

	const displayFleet = () => {
		let fleet = [];
		for (let ship = 0; ship < config.shipSizes.length; ship++) {
			const shipSize = config.shipSizes[ship];
			const shipContainer = [];
			for (let shipPiece = 0; shipPiece < shipSize; shipPiece++) {
				shipContainer.push(
					<div
						className="shipPart"
						onClick={(e) => {
							selectShip(e);
						}}
					></div>
				);
			}
			fleet.push(
				<div className="ship" id={ship}>
					{shipContainer}
				</div>
			);
		}
		return <div>{fleet}</div>;
	};
	return displayFleet()
};

export default Fleet;
