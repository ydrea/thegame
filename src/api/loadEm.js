import ldata from "../data/db.json";
import React, { useState } from "react";

//
export const loadEm = (query) => {
  console.log("ldata", ldata);
  const { data } = ldata.find(query);
  return data;
};
