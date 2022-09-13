import React from "react";
import { Card, Input, Button } from "reactstrap";
//
function QCard({ sculpture, query, handleChange, handleSubmit }) {
  return (
    <div>
      {" "}
      <Card style={{ width: "19rem" }}>
        <p>Enter the first name of the person that the sculpture depicts</p>
        <img
          style={{ width: "17rem" }}
          alt="slija"
          src={`/sculptures/${sculpture.img}`}
        />
        <form onSubmit={handleSubmit}>
          <Input
            className="input"
            placeholder="Enter response"
            type="text"
            value={query}
            onChange={handleChange}
          />
          <Button className="button" type="submit">
            enter
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default QCard;
