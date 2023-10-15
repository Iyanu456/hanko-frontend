import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = `https://bd2d97b7-584f-4d05-8207-8442e86f8911.hanko.io`;

function LogoutBtn() {
  const navigate = useNavigate();
  const [hanko, setHanko] = useState();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return <button onClick={logout}>Logout</button>;
}

export default LogoutBtn;
