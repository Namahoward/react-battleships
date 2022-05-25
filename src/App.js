import "./App.css";
import "./styles/board.css";
import "./styles/fleet.css";
import Board from "./components/Board";
import Fleet from "./components/Fleet";
import React, { useState } from "react";

function App() {
	const config = {
		shipSizes: [2, 3, 3, 4, 5],
		rows: 10,
		columns: 10,
	};

	const [gameState, setGameState] = useState("start");
	const [shipSelected, setShipSelected] = useState(0);

	return (
		<div className="App">
			<Board
				gameState={gameState}
				rows={config.rows}
				columns={config.columns}
				config={config}
				shipSelected={shipSelected}
			/>
			<Fleet
				gameState={gameState}
				setGameState={setGameState}
				setShipSelected={setShipSelected}
				config={config}
			/>
		</div>
	);
}

export default App;
