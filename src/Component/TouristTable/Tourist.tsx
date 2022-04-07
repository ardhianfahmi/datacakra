import React, { useEffect, useState } from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./tourist.css";
import axios from "axios";
import { TouristInterface } from "./Tourist.interface";

export default function TouristIndex() {
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved || "{}");
    return initialValue || "";
  });

  const [data, setData] = useState<TouristInterface>();
  const [maxpage, setMaxpage] = useState(1);
  const [currentpage, setCurrentPage] = useState(1);
  const fetchTourist = (i: number) => {
    let config = {
      params: { page: i },
      headers: {
        Authorization: "Bearer " + user.Token,
        "Content-Type": "application/json",
      },
    };
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/Tourist", config)
      .then((res) => {
        setData(res.data);
        setMaxpage(res.data.total_pages);
        setCurrentPage(parseInt(res.data.page));
      });
  };

  const deleteTourist = (id: string) => {
    let config = {
      headers: {
        Authorization: "Bearer " + user.Token,
        "Content-Type": "application/json",
      },
    };
    axios
      .delete(process.env.REACT_APP_API_BASE_URL + "/Tourist/" + id, config)
      .then((res) => {
        alert("deleted " + res.data.id);
        fetchTourist(currentpage);
      });
  };

  useEffect(() => {
    fetchTourist(currentpage);
  }, [currentpage]);

  function nextPage() {
    setCurrentPage(currentpage + 1);
    if (currentpage > maxpage) {
      setCurrentPage(currentpage - 1);
    }
  }

  function prevPage() {
    setCurrentPage(currentpage - 1);
    if (currentpage <= 0) {
      setCurrentPage(1);
    }
  }

  function deleteData(id: string) {
    deleteTourist(id);
  }
  //pagination

  return (
    <div className="app-container">
      <div className="pagination">
        {/* prev button */}
        <button
          className="edit"
          onClick={prevPage}
          style={{ margin: "5px 5px 5px 0px" }}
        >
          Prev Page
        </button>
        {/* next button */}
        <button className="edit" onClick={nextPage}>
          Next Page
        </button>
      </div>
      {/* create user */}
      <div className="create">
        <a href="/create">
          <button className="edit">Add Tourist</button>
        </a>
      </div>

      <table>
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((d) => {
            if (d) {
              return (
                <tr>
                  <td>
                    <img
                      src={d.tourist_profilepicture}
                      alt=""
                      className="imgTourist"
                    />
                  </td>
                  <td>{d.tourist_name}</td>
                  <td>{d.tourist_location}</td>
                  <td>{d.tourist_email}</td>
                  <td>
                    <button className="edit">Edit</button>
                    <button className="delete" onClick={() => deleteData(d.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
