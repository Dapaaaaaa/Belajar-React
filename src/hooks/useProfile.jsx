import { useEffect, useState } from "react";

export const useProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
      // Karena ga ada username, kita potong email sebelum tanda '@'
      // Contoh: 'admin@gmail.com' -> 'admin'
      const namePart = savedEmail.split("@")[0];
      setUsername(namePart);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return { username, email, handleLogout };
};