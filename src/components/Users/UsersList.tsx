import React from "react";
import Card from "../Common/Card";
import classes from "./UsersList.module.css";

const UsersList: React.FC<{ users: any }> = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user: any) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
