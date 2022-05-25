import React, { useState } from "react";
import Square from "./Square";

const Board = ({ config, gameState, rows, columns, shipSelected }) => {
	const [squareClicked, setSquareClicked] = useState(-1);
	const [playerShipPositions, setPlayerShipPositions] = useState([]);

	const isShip = (position, playerShipPositions, config) => {
		const shipKeys = Object.keys(playerShipPositions);
		const arrayLength = shipKeys.length;

		for (let key in shipKeys) {
			if (playerShipPositions[key].includes(position)) {
				return true;
			}
		}
		return false
	};

	let grid = [];

	for (let i = 0; i < rows; i++) {
		let rows = [];
		for (let j = 0; j < columns; j++) {
			const position = j * config.columns + i + 1;
			rows.push(
				<Square
					gameState={gameState}
					config={config}
					column={i + 1}
					row={j + 1}
					position={j * config.columns + i + 1}
					isShip={isShip(position, playerShipPositions, config)}
					playerShipPositions={playerShipPositions}
					setPlayerShipPositions={setPlayerShipPositions}
					setSquareClicked={setSquareClicked}
					shipSelected={shipSelected}
				/>
			);
		}
		grid.push(<div className={`column column-${i + 1}`}>{rows}</div>);
	}

	return <div className="board">{grid}</div>;
};

export default Board;
