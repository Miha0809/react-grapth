import "./cell.scss";

function Cell({ item }: { item: number }) {
  return (
    <div className="cell">
      <p>{item}</p>
    </div>
  );
}

export default Cell;
