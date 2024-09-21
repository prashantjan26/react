import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offine", (event) => {
      console.log(event);
      setOnlineStatus(false);
    });
    window.addEventListener("online", (event) => {
      console.log(event);
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
