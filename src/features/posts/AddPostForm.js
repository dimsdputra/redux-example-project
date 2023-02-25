import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onSavePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div>
      <h2>Add a New Form</h2>
      <form className="input-form">
        <div className="input">
          <label htmlFor="postTitle">Title</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="postAuthor">Author</label>
          <select
            name=""
            id="postAuthor"
            value={userId}
            onChange={onAuthorChange}
          >
            <option value=""></option>
            {userOptions}
          </select>
        </div>
        <div className="input">
          <label htmlFor="postContent">Content</label>
          <textarea
            name="postContent"
            id="postContent"
            value={content}
            onChange={onContentChange}
          />
        </div>
        <button type="button" onClick={onSavePost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
