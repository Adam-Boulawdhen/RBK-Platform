import React from "react";
import ReactDOM from "react-dom";
import Chat from './components/ChatRoom/ChatRoom.jsx'
import Calendar from './components/ADMIN/Calendar/Calendar.jsx'
import DeleteCohortOrUsers from "./components/ADMIN/DeleteCohortOrUsers/DeleteCohortOrUsers.jsx";
import App from "./components/App/App.jsx";
import ChatRoom from "./components/ChatRoom/ChatRoom.jsx";
import UserPorfile from "./components/ADMIN/UserProfile/UserProfile.jsx";
import CreateAccount  from "./components/ADMIN/CreateAccount/CreateAccount.jsx"
ReactDOM.render(<App />, document.getElementById("app"));