import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AddCard } from "./Components/Admin/AddCard";
import { EditCard } from "./Components/Admin/EditCard";
import { List } from "./Components/List/List";
import { Navbar } from "./Components/Navbar/Navbar";
import { User } from "./Components/User/User";
import { UserDetail } from "./Components/User/UserDetail";

export const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/add" element={<AddCard />} />
      <Route path="/user" element={<User />} />
      <Route path="/edit/:id" element={<EditCard />} />
      <Route path="/details/:id" element={<UserDetail />} />
    </Routes>
  );
};
