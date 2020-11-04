import React from 'react';
import PostDetails from './PostDetails';
import '../../CSS/postlist.css'

//In news live  postlist, each post is postdetails component.
function PostList(props) {

  const { onDelete, onEdit, savePost, posts } = props;
  const renderPostList = () => {

    return posts.data && posts.data.map((post, index) => {//map is on array not forget
      return (
        <PostDetails
          onDelete={onDelete}
          onEdit={onEdit}
          savePost={savePost}
          key={post.id}
          keyPost={post.id}
          post={post}>
        </PostDetails>
      )
    });
  };

  return (<div className="postList" >{renderPostList()}</div>)
}

export default PostList;