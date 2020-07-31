import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./components/User";
import "./App.css";
import Loading from "./components/Loading";
import Pagination from "./components/Pagination";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, []);

  const getPosts = () => {
    axios.get("https://api.github.com/users").then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  };

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <Loading />;

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Type</th>
            <th scope="col">URL</th>
            <th></th>
          </tr>
        </thead>
        <User users={currentItems} />
      </table>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
