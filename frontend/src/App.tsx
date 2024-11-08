import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Add from "./pages/add";
import Search from "./pages/Searchpage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to={"/add"} />} />
          <Route path="search" element={<Search />} />
          <Route path="add" element={<Add />} />
          <Route path="*" element={<>404</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
