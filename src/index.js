import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Post from "./Post";
import Register from "./Register";
import NewPost from "./NewPost";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/post" element={<Post />} />
      <Route path="register" element={<Register />} />
      <Route path="post/newpost" element={<NewPost />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
