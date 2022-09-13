import { Card } from "reactstrap";

function RCard({ sculpture }) {
  return (
    <div>
      RCard
      <Card style={{ width: "19rem" }}>
        <p>Correct!</p>
        <div>{sculpture.description}</div>
      </Card>
    </div>
  );
}

export default RCard;
