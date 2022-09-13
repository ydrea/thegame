import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Input, Button } from "reactstrap";
import Counter from "./Counter";
//
import { selectSculptures } from "../redux/dataSlice";
import { selectCount } from "../redux/counterSlice";
//
function AGame() {
  //local stejt
  const [query, querySet] = useState("");
  const [, searchSet] = useState();
  const handleChange = (e) => {
    querySet(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchSet(query);
  };

  //selectas
  const count = useSelector(selectCount);
  console.log(count);
  const sculptures = useSelector(selectSculptures);
  const sculpture = sculptures[`${count}`];
  console.log(sculpture);
  // //
  return (
    <div>
      <Card style={{ width: "19rem" }}>
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
      <Counter />
    </div>
  );
}

export default AGame;
