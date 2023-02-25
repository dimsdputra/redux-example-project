import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


const PostList = () => {
  const post = useSelector(selectAllPost);

  const orderedPosts = post.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderPost = orderedPosts.map((posts) => (
    <article key={posts.id}>
      <h3>{posts.title}</h3>
      <p>{posts.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={posts.userId}/>
        <TimeAgo timestamp={posts.date}/>
      </p>
      <ReactionButtons post={posts}/>
    </article>
  ));
  return (
    <div>
      <h2>Post</h2>
      {renderPost}
    </div>
  );
};

export default PostList;
