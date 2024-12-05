
import React from "react";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Cell from "../../components/Cell/Cell";

import "./maze.scss";

export const Maze: React.FC = () => {
  const [isActiveMaze, setActiveMaze] = useState < boolean > (false);
  const [grapth, setGrapth] = useState < Array(Array) | null > (
    Array(8)
      .fill()
      .map(() => Array(8).fill(0)),
  );

  const init = () => {
    let newArray = grapth;
    newArray[0][0] = 1;
    setGrapth(newArray);
    setActiveMaze(!isActiveMaze);
  };

  return (
    <div className="maze">
      {isActiveMaze && (
        <div className="row">
          {grapth.map((row, _) => (
            <div className="column">
              {row.map((cell, _) => (
                <Cell item={cell} />
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="button">
        <Button onClick={init} variant="contained">
          {isActiveMaze ? "Hide" : "Start"}
        </Button>
      </div>
    </div>
  );
};
