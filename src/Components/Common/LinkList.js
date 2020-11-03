import React from "react";
import { Link } from 'react-router-dom';

//creates the navigation by clicking on header category  menu
class LinkList extends React.Component {

     state = { activeId: this.props.active ||  "general" };

     onClick = (event) => {
    
          this.setState({activeId: event.target.id });
     }
//semantic gui needs in class name active-to know the active category to color and violet define the color
     getClassName = (category) =>
     {
          let className = 'item left menu';

          className += 
               this.state.activeId === category ? ' active violet' : '';

          return className;
     }

     renderList = (props) => {
          return this.props.categories.map((category, index) => {
               let categoryLowercase = category.toLowerCase();
               return (
                    <Link
                         key={index}
                         id={`${categoryLowercase}`}
                         to={`/category/${categoryLowercase}`}
                         className={this.getClassName(categoryLowercase)}
                         onClick={this.onClick} >
                         {category}
                    </Link>
               );
          });
     }

     render() {
          return (<>{this.renderList()}</>)
     }
};

export default LinkList;


//{ <div className="left menu">
//   <Link id="sports" to="/category/sports" className='item' onClick={this.toggleToActive}>
//     Sports
//   </Link>
// </div>

