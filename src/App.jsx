
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import AuthContext from "./context/AuthContext";
import AppRouter from "./routers/Approuter";
import { ConfigProvider, notification } from "antd";
import Header from "./Components/Header";
import useNotification from "antd/es/notification/useNotification";

function App() {

  const [currentUser, setCurrentUser] = useState();
  const [notify, notifyContextHolder] = useNotification();

  return (
    <BrowserRouter>
      <ConfigProvider>
        <AuthContext.Provider value={{
          currentUser, setCurrentUser
        }}>
          {notifyContextHolder}
          <Header />
          <AppRouter />
        </AuthContext.Provider>

      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
