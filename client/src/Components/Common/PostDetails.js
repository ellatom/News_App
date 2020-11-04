import React, { useState } from 'react';
import { Grid, List, Header, Image } from "semantic-ui-react";
import '../../CSS/postdetails.css';
import Popup from '../Core/Modal';
//postlist has post, eact post has details, click on edit opens popup.
function PostDetails(props) {

    const [showPopup, setShowPopup] = useState(false);
    const { onDelete, onEdit, savePost, post, keyPost } = props;

    const onDeleteClick = async (event) => {//if i call asyncf function i should add await
        await onDelete(event, keyPost);
    }

    const onEditClick = async (event) => {
        setShowPopup(true);
        await onEdit(event, post.id);
    }

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    return (
        <>
            <List.Item>
                <Grid>
                    <Grid.Column width={16}>
                        <div className="postView">
                            <br />
                            <div className="ui card">
                                <Header as="h3" className="title" key={post.id}><i className="far fa-question-circle"></i>Title:<br />{post.title}</Header>
                                <List.Description className="description"><i className="fas fa-crown">Description:</i><br />{post.description}</List.Description>
                                <List.Description className="author"><i className="fas fa-crown">Author:</i><br />{post.author}</List.Description>
                                <List.Description className="author"><i className="fas fa-crown">Image:</i><br />{post.urlToImage}</List.Description>
                                <Image src={post.urlToImage} className="urlToImage" />
                                <div>
                                    <button className="ui left attached button" onClick={onEditClick}>Edit</button>
                                    <button className="right attached ui button" onClick={onDeleteClick}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid>
            </List.Item>
            {showPopup && <Popup post={post} savePost={savePost} closePopup={togglePopup} />}
        </>
    )
}
export default PostDetails;

