import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  firestore,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "@firebase/firestore";
import { getFirestore, collection } from "@firebase/firestore";

function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postCollectionRef = collection(getFirestore(), "post");

  const handleNewPost = async () => {
    const currentTime = serverTimestamp();
    await addDoc(postCollectionRef, {
      Title: title,
      Content: content,
      Date: currentTime,
    });
    console.log("success");
  };

  return (
    <div>
      <h1>Create A Post!</h1>
      <TextField
        id="standard-basic"
        label="title"
        variant="standard"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="content"
        variant="standard"
        onChange={(e) => setContent(e.target.value)}
      />
      <Button variant="contained" color="success" onClick={handleNewPost}>
        POST
      </Button>
    </div>
  );
}

export default NewPost;
