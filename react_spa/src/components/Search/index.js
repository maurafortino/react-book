import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import API from "../../utils/API"

class SearchForm extends Component{
    state ={
        books: [],
        query: ''
    };

    handleOnSubmit = e => {
        e.preventDefault();
        this.searchBooks(this.state.query);
      };

    handleInputChange = e => {
        const {name, value } = e.target;
        this.setState({
          [name]: value,
        });
      };

    searchBooks(query){
        API.searchBooks(query)
        .then((res) => {
          const bookList = res.data.map((response) => {
            return {
              googleId: response.id,
              title: response.volumeInfo.title,
              author: response.volumeInfo.authors,
              description: response.volumeInfo.description,
              image: response.volumeInfo.imageLinks.thumbnail,
              link: response.volumeInfo.infoLink
            };
          });
  
          this.setState({ books: bookList });
        })
        .catch((error) => console.log(error));
    };

    render(){
       return( <div>
            <form>
                <Container>
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="search for book here"
                                name="query"
                                value={this.state.query}   
                                onChange={this.handleInputChange}/>
                        </Col>
                    </Row>
                    <button className="btn btn-success" type="submit" onSubmit={(e) => this.handleSubmit(e)}>Submit</button>
                </Container>
            </form>

            <Container>
                <Row>
                    <Col size="12">
                        <div className="search-results">
                        {!this.state.books.length ? (
                        <h2 className="text-center">No Results. Did you enter a book title?</h2>)
                        : (<h2 className="text-center">successful search!</h2>)}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
       )};
};

export default SearchForm;