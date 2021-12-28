import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { UserBar } from "../UserBar";

export const UserList = (props) => {
  return (
    <div className={styles.list}>
      {props.users.map((user, key) => {
        return (
          <UserBar
            key={key}
            id={user.id}
            setSelected={props.setSelectedUsers}
            users={props.selectedUsers}
          >
            {user.name}
          </UserBar>
        );
      })}
    </div>
  );
};
