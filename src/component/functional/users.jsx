import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingUsers from "../loding/lodingUsers";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const componentDidMount = async () => {
      setIsloading(true);
      const response = await axios.get("https://reqres.in/api/users");
      setUsers(response.data.data);
      setIsloading(false);
    };

    componentDidMount();
  }, []);

  async function handelCreate() {
    const newuser = {
      id: "7",
      first_name: "rana",
      last_name: "weysi",
      email: "ranaweysi@gmail.com",
      avatar: require("../../assets/rana2.jpg"),
    };

    await axios.post(`https://reqres.in/api/users/${users.id}`, newuser);
    setUsers([...users, newuser]);
  }

  async function handelUpadte(user) {
    user.first_name = "raana";
    await axios.put(`https://reqres.in/api/users/${users.id}`, user);
    const updateusers = [...users];
    const index = updateusers.indexOf(user);
    updateusers[index] = { ...user };
    setUsers(updateusers);
  }

  async function handelDelete(user) {
    await axios.delete(`https://reqres.in/api/users/${users.id}`);
    const newuser = users.filter((u) => u.id !== user.id);
    setUsers(newuser);
  }

  return (
    <>
      <button onClick={handelCreate} className="btn btn-success btn-lg">
        Create User
      </button>
      <div className="row">
        {isLoading ? (
          <LoadingUsers />
        ) : (
          users.map((user) => {
            return (
              <div key={user.id} className="col-md-4 col-sm-6 text-center p-5">
                <img
                  src={user.avatar}
                  style={{
                    borderRadius: "50%",
                    width: "100Px",
                    height: "100px",
                  }}
                  alt=""
                />

                <Link
                  className=" text-decoration-none"
                  to={`/users/${user.id}`}
                >
                  <h4 className="link-secondary">
                    {user.first_name} {user.last_name}
                  </h4>
                </Link>

                <h5>{user.email}</h5>
                <div className="row">
                  <div className="col-6">
                    <button
                      onClick={() => {
                        handelUpadte(user);
                      }}
                      className="btn btn-sm btn-info"
                    >
                      Update
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      onClick={() => {
                        handelDelete(user);
                      }}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Users;
