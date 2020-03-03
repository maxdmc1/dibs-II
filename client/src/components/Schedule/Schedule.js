import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "grommet";
import queryString from "query-string";

export default function Schedule() {
  const [mornMeal, setMornMeal] = useState("");
  const [aftMeal, setAftMeal] = useState("");
  const [eveMeal, setEveMeal] = useState("");
  const [mornAct, setMornAct] = useState("");
  const [aftAct, setAftAct] = useState("");
  const [eveAct, setEveAct] = useState("");
  const id = queryString.parse(window.location.search).id;

  useEffect(() => {}, []);

  return (
    <Box direction="row" background="blue" pad="medium">
      <div>
        <input
          value={mornMeal}
          type="text"
          name="mornMeal"
          onChange={({ target }) => setMornMeal(target.value)}
          placeholder="Morning Meal"
        ></input>
        <input
          value={aftMeal}
          type="text"
          name="aftMeal"
          onChange={({ target }) => setAftMeal(target.value)}
          placeholder="Afternoon Meal"
        ></input>
        <input
          value={eveMeal}
          type="text"
          name="eveMeal"
          onChange={({ target }) => setEveMeal(target.value)}
          placeholder="Evening Meal"
          required
        ></input>
        <input
          value={mornAct}
          type="text"
          name="mornAct"
          onChange={({ target }) => setMornAct(target.value)}
          placeholder="Morning Activity"
        ></input>
        <input
          value={aftAct}
          type="text"
          name="aftMeal"
          onChange={({ target }) => setAftAct(target.value)}
          placeholder="Afternoon Activity"
        ></input>
        <input
          value={eveAct}
          type="text"
          name="eveMeal"
          onChange={({ target }) => setEveAct(target.value)}
          placeholder="Evening Activity"
          required
        ></input>
        <button
          onClick={e => {
            e.preventDefault();
            console.log(
              "state : ",
              mornMeal,
              aftMeal,
              eveMeal,
              mornAct,
              aftAct,
              eveAct
            );
            fetch(`/api/schedule`, {
              method: "POST",
              body: JSON.stringify({
                morningMeal: mornMeal,
                afternoonMeal: aftMeal,
                eveningMeal: eveMeal,
                morningActivity: mornAct,
                afternoonActivity: aftAct,
                eveningActivity: eveAct,
                date: "2020-02-12",
                TripId: id
              }),
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(res => res.json())
              .then(res => console.log(res));
          }}
          label="Dibs!"
        />
      </div>
    </Box>
  );
}
