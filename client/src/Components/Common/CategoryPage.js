import api from '../Core/api';
import React from 'react';
import { Container } from "semantic-ui-react";
import NewsList from './NewsList';
import '../../CSS/categorypage.css';
import SearchBar from '../Core/SearchBar';
import Loader from '../Core/Loader';

class CategoryPage extends React.Component {

  state = {isLoading:false,
    initialArticles: [], articles: [], apiError: "", activecategory: "",
    categories: ["general", "technology", "sports", "business", "science", "entertainment"]
  };


  componentDidMount = async () => {

    try {
      let current = this.props.match.params.categoryname;
      await this.setCategory(current);
    }
    catch (error) {
      debugger;
      this.setState({ apiError: error });
    }
  }
  componentDidUpdate = async (prevprops, prevstate) => {//make function ,useEffect later
    try {
      let current = this.props.match.params.categoryname;
      let previous = prevprops.match.params.categoryname;

      if (current !== previous) {
        await this.setCategory(current);
      }
    }
    catch (error) {
      this.setState({ apiError: error });
    }
  }//receive error from api

  setCategory = async (category) => {
    this.setState({isLoading:true});
    const response = await api.getByCategory(category);
    this.setState({ articles: response, initialArticles: response ,isLoading:false});
    console.log(response);
  }

  searchWord = (word) => {

    let filtered =
      this.state.initialArticles
        .filter(article =>
          article.title.toLowerCase().includes(word.toLowerCase()));

    this.setState({ articles: filtered });
  }

  showNews = () =>
  {
    if (this.state.articles.length === 0)
      return (
        <Loader/>//"no results"
      );

    return (
      <NewsList articles={this.state.articles}/>
    );
  }

  showError = () =>
  {
    if (!this.state.apiError)
      return "";

    return this.state.apiError.message;
  }

  render() {
    console.log(`CategoryPage.render`);
    return (
      <Container>
         <div className="ui pointing menu">
          <div className="right menu">
            <div className="item">
              <div className="ui transparent icon input">
                <SearchBar searchWord={this.searchWord}></SearchBar>
                <i className="search link icon"></i>
              </div>
            </div>
          </div>
          </div>
        {/* {this.state.loading&&<Loader/>} */}
        {this.showNews()}
        {<p>{this.showError()}</p>}
      </Container>
    );
  }
}

export default CategoryPage;