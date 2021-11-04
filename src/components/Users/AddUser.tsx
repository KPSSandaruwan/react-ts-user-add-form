import React, { useState } from "react";
import Button from "../Common/Button";
import Card from "../Common/Card";
import ErrorModel from "../Common/ErrorModel";
import classes from "./AddUser.module.css";

const AddUser: React.FC<{ onAddUser: (uNmae: string, uAge: string) => void }> =
  (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setenteredAge] = useState("");
    const [error, setError] = useState<{ title: string; message: string }>();

    const addUserHandler = (event: React.FormEvent) => {
      event.preventDefault();
      if (
        enteredUsername.trim().length === 0 ||
        enteredAge.trim().length === 0
      ) {
        setError({
          title: "Invalid Input",
          message: "Please enter a valid name ane age (non-empty values).",
        });
        console.log(setError)
        return;
      }
      if (+enteredAge < 1) {
        setError({
          title: "Invalid Age",
          message: "Please enter a valid age (> 0).",
        });
        return;
      }

      props.onAddUser(enteredUsername, enteredAge);

      setEnteredUsername("");
      setenteredAge("");
    };

    const usernameChangeHandler = (event: any) => {
      setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event: any) => {
      setenteredAge(event.target.value);
    };

    const errorHandler = () => {
      setError(null as any);
    }

    return (
      <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={enteredUsername}
              type="text"
              onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              value={enteredAge}
              type="number"
              onChange={ageChangeHandler}
            />
            <Button type="submit">
              Add User
            </Button>
          </form>
        </Card>
      </div>
    );
  };

export default AddUser;
