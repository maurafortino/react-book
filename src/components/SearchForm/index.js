import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import API from "../../utils/API"

class SearchForm extends Component{
    state ={
        books: [],
        search: ''
    };

    handleOnSubmit = e => {
        e.preventDefault();
        this.searchBooks(this.state.search);
      };

    handleInputChange = e => {
        const {name, value } = e.target;
        this.setState({
          [name]: value,
        });
      };

    searchBooks(search){
        API.searchBooks(search)
        .then((res) => {
          const bookList = res.data.map((response) => {
            return {
              title: response.volumeInfo.title,
              author: response.volumeInfo.authors,
              description: response.volumeInfo.description,
              image: response.volumeInfo.imageLinks.thumbnail,
              link: response.volumeInfo.infoLink,
              googleId: response.id
            };
          });
  
          this.setState({ books: bookList });
          alert(this.state.books.length);
        })
        .catch((error) => console.log(error));
    };

    render(){
       return( 
       <div>
            <form onSubmit={(e) => this.handleOnSubmit(e)}>
                <Container>
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="search for book here"
                                name="search"
                                value={this.state.search}   
                                onChange={this.handleInputChange}/>
                        </Col>
                    </Row>
                    <button className="btn btn-success" type="submit">Submit</button>
                </Container>
            </form>

            <Container>
                <Row>
                    <Col size="12">
                        <div className="search-results">
                        {!this.state.books.length ? (
                        <h2 className="text-center">No Results. Did you enter a book title?</h2>)
                        : (this.state.books.map(book => {
                            return(
                                <h3>{book.title}</h3>
                            )
                        })
                     )};
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
       )};
};

export default SearchForm;