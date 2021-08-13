import './Users.css';
import {useEffect, useState} from "react";
import {getUsers} from "../../service";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(value => setUsers([...value]));
  });

  return (
    <div>
      {
        users.map(user => {})
      }
    </div>
  );
}
