import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import Cell from "../../components/Cell/Cell";
import { Node } from "../../utils/Node";

import "./Maze.scss";

function DFS(grapth: Node): void {
  grapth.isVerified = true;

  grapth.neighbors.forEach((item) => {
    if (!item.isVerified) {
      DFS(item);
      console.log(item.toString());
    }
  });
}

export const Maze: React.FC = () => {
  const el0 = new Node(0);
  const el1 = new Node(1);
  const el2 = new Node(2);
  const el3 = new Node(3);
  const el4 = new Node(4);
  const el5 = new Node(5);
  const el6 = new Node(6);
  const el7 = new Node(7);
  const el8 = new Node(8);
  const el9 = new Node(9);

  el0.addNeighborhood(el1);
  el0.addNeighborhood(el3);
  el1.addNeighborhood(el8);
  el3.addNeighborhood(el2);
  el3.addNeighborhood(el9);
  el3.addNeighborhood(el7);
  el8.addNeighborhood(el5);
  el2.addNeighborhood(el6);
  el2.addNeighborhood(el4);


  const [grapth, setGrapth] = useState<number[][]>([[]]);
  const [isShowMaze, setIsShowMaze] = useState<boolean>(false);

  const init = (state: boolean) => {
    setGrapth(
      Array(10)
        .fill(1)
        .map(() => Array(10).fill(-1))
    );
    setIsShowMaze(state);
  };

  return (
    <div className="maze">
      <div className="row">
        {isShowMaze &&
          grapth.map((row: number[], _: any) => (
            <div className="column">
              {row.map((cell: number, _: any) => (
                <Cell item={cell} />
              ))}
            </div>
          ))}
      </div>
      <div className="btn">
      <Button onClick={() => init(!isShowMaze)} variant="contained">
          {isShowMaze ? "Hide" : "Start"}
        </Button>
      </div>
    </div>
  );
};
