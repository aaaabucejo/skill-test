import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { firestore, getDocs, deleteDoc, doc } from "@firebase/firestore";
import { getFirestore, collection } from "@firebase/firestore";

function Post() {
  const [postCollection, setPostCollection] = useState([]);
  const postCollectionRef = collection(getFirestore(), "post");

  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await getDocs(postCollectionRef);
        console.log("Data from Firestore:", data.docs);
        setPostCollection(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPost();
  }, []);

  const handleNewPost = () => {
    navigate("newpost");
  };

  const handleDeletePost = async (id) => {
    console.log(id);
    const postDoc = doc(postCollectionRef, id);

    try {
      await deleteDoc(postDoc);
      console.log("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEditPost = (postId) => {
    navigate(`/editpost/${postId}`);
  };

  return (
    <div>
      {postCollection.map((post) => (
        <div key={post.id}>
          <h1>{post.Title}</h1>
          <p>{post.Content}</p>
          <p>
            {post.Date &&
            post.Date.toDate &&
            typeof post.Date.toDate === "function"
              ? post.Date.toDate().toLocaleString()
              : "Invalid Date"}
          </p>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleDeletePost(post.id)}
          >
            DELETE
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleEditPost(post.id)}
          >
            EDIT
          </Button>
        </div>
      ))}
      <div>
        <Button variant="contained" onClick={handleNewPost}>
          CREATE NEW POST
        </Button>
      </div>
    </div>
  );
}

export default Post;
