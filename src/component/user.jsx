import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const User = (props) => {
  const params = useParams();
  const [users, setUsers] = useState({});
  const location = useLocation();
  // console.log(queryString.parse(location.search));

  useEffect(() => {
    async function componentDidMount() {
      const respons = await axios.get(`https://reqres.in/api/users/${params.id}`);
      setUsers(respons.data.data);
    }
    componentDidMount();
  }, []);

  return (
    <>
      <img
        src={users.avatar}
        style={{ borderRadius: "50%", width: "100px" }}
        alt=""
      />
      <h4>
        {users.first_name} {users.last_name}
      </h4>
      <h5>{users.email}</h5>
    </>
  );
};

export default User;
