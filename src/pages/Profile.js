import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { toggleVisible } from "../store/profile/actions";
import { getProfileVisible } from "./../store/profile/selectors";
import { Link } from "react-router-dom";
import { logOut, userRef } from "./../services/firebase";
import { onValue, set } from "firebase/database";

export function Profile(props) {
  const visible = useSelector(getProfileVisible, shallowEqual);
  const isAuth = useSelector((state) => state.profile.isAuth);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onValue(userRef, (snapshot) => {
      const user = snapshot.val();
      setName(user.name || "");
    });

    return unsubscribe;
  }, []);

  const handleChangeName = () => {
    set(userRef, {
      name,
    });
  };

  return (
    <>
      <h2>Profile page</h2>
      <p>Name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleChangeName}>change name</button>

      <br />

      <input
        type="checkbox"
        checked={visible}
        onChange={() => dispatch(toggleVisible)}
      />
      <p>{name}</p>
      {isAuth ? (
        <button onClick={() => logOut()}>signout</button>
      ) : (
        <Link to="/signin">
          <button>signin</button>
        </Link>
      )}
    </>
  );
}
