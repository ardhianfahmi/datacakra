import React, { useState } from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./profile.css";

export default function Profile() {
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved || "{}");
    return initialValue || "";
  });
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredMoneyContainer">
          <img
            src="https://scontent.fbdo9-1.fna.fbcdn.net/v/t39.30808-6/277673335_5097817360312719_5853168617992084890_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFqb12FQNyqsE2fUYsoqU4rfJmQCnIUypV8mZAKchTKlYVUGy9xDT-1aiY64Ocn9gK1MXtpWLn3hCSZNJ6gvI9o&_nc_ohc=goqsp-Le1bYAX-JK93i&tn=G_rwsKsOvcLjcGq0&_nc_ht=scontent.fbdo9-1.fna&oh=00_AT_bzmqgStt9-wNjBEWvkky9-c85WzWPj2IJxaRREQz1dw&oe=6254133D"
            alt=""
            className="profileAvatar"
          />
          <div className="name">
            <span className="featuredTitle">{user.Name}</span>
            <div className="email">
              <span className="featuredMoney">{user.Email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
