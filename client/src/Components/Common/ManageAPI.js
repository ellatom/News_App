import React from 'react';
import api from '../Core/api';
import LiveNewsPage from './LiveNewsPage';
import PostList from './PostList';
import Popup from '../Core/Modal';
import Loader from '../Core/Loader';

//controls all crud functionality 
class ManageAPI extends React.Component {

  state = { posts: [], loading: false ,currentPost:{},showPopup:false};

  componentDidMount() {
    this.setState({ loading: true });
    this.getPosts();
  }
  //API CRUD:GET
  getPosts = async () => {
    let posts =
      await api.getPosts();

    this.setState({
      posts: posts,
      loading: false
    });
  }
//API CRUD:DELETE
  setDelete = async (event, key) => {
    debugger;
    this.setState(
      { loading: true },

      async () => {
        await api.deletePost(key);
        this.setState({
          loading: false
        });
        await this.getPosts();
      });
  }
  setEdit = async (event, key) => {

    let post =
      this.state.posts.data.find(c => c.id === key);

    this.setState({
      currentPost: post
    });
  }

  savePost = async (post) => {///nt be bug and easy to know created from gui by user and not mockapi.
    
   
    if (post.id) {
      await api.updatePost(post);
    }
    else {
      post.id =
        String(Math.floor(Math.random() * 200) + 100);

      await api.createPost(post);
    }
    this.setState({
      loading: true
    });
    await this.getPosts();
    
    this.setState({
      loading: false
    });

  }
  updatePost = async (post) => {
    await api.updatePost(post);
  }

  onAdd = async (post) => {

    post.id =
      String(Math.floor(Math.random() * 200) + 100);

    this.setState({ loading: true },
      async () => {
        await api.createPost(post);

        this.setState({
          loading: false
        });
      });
  }
  addNewPostClick=()=>
  {
    this.setState({showPopup:true});
    return (<LiveNewsPage></LiveNewsPage>)
  }
  
  togglePopup = () => {
    this.setState({showPopup:false});
  }

  render() {
    console.log(`ManageAPI.render ${JSON.stringify(this.state.currentPost)}`);
    return (
      <div>
        <br/>
        <div class="ui vertical animated button basic violet" tabindex="0" onClick={this.addNewPostClick}>
          <div class="hidden content"><i class="newspaper icon"></i></div>
          <div class="visible content">Add Post</div>
        </div>

        {this.state.showPopup && <Popup post={this.state.posts} savePost={this.savePost} closePopup={this.togglePopup} />}
        {!this.state.loading?
        <PostList
          posts={this.state.posts}
          onDelete={this.setDelete}
          onEdit={this.setEdit}
          savePost={this.savePost}>
          error={this.state.error}
        </PostList>:<Loader/>}
        {/* <LiveNewsPage
          post={this.state.currentPost}
          savePost={this.savePost}>
        </LiveNewsPage> */}
      </div>
    )
  }
};

export default ManageAPI;
