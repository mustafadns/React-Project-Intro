import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // Yeni Nesil ve Sürüm React'da bunun kullanım zorunluluğu
  // kalkmıştır ve bu yapı kullanılmadan da props yapısı kullanılabilir!!!

  // ---------------------
  // constructor(props) {
  //     super(props);
  //     state:{}
  // }
  // ---------------------

  // React'a yeni gelen özellikler sayesinde constructor ifadesinin kullanım 
  // zorunluluğu kalkmıştır o kullanılmadan da state kavramı kullanılabilir !!! 

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories")
        .then(response => response.json())
        .then(data => this.setState({categories:data}));
    }

    render() {
        return (
        <div>
            <h3>{this.props.info.tittle}</h3>
            <ListGroup>
                {
                    this.state.categories.map(category => (
                        <ListGroupItem 
                            active= {category.categoryName === this.props.currentCategory?true:false}
                            onClick={() => this.props.changeCategory(category)} 
                            key={category.id}
                        >
                                {category.categoryName}
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
            {/* <h4>{this.props.currentCategory}</h4> */}
        </div>
        );
    }
    }
