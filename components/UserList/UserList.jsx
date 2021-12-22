import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { UserBar } from "../UserBar";

export const UserList = (props) => {
  const [activeUsers, setActiveUsers] = useState([]);
  useEffect(() => {
    props.setSelectedUsers(activeUsers);
  });

  return (
    <div className={styles.list}>
      {props.users.map((user, key) => {
        return (
          <UserBar
            key={key}
            id={user.id}
            setSelected={setActiveUsers}
            users={activeUsers}
          >
            {user.name}
          </UserBar>
        );
      })}
    </div>
  );
};
