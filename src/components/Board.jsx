import React from "react";

const Board = (props) => {
    let grid = []

    for(let i=0; i<props.rows; i++){
        let rows = [];
        for(let j=0; j<props.columns; j++){
            rows.push(<div className={`square row-${j+1}`}></div>)
        }
        grid.push(<div className={`column column-${i+1}`}>{rows}</div>)
    }


	return <div className="board">{grid}</div>;
};

export default Board;
