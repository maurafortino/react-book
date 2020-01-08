import React, { useState } from "react";
import Container from "../src/components/Container";
import Row from "../src/components/Row";
import Col from "../src/components/Col";
 
const Search = () => {
  const [search, setSearch] = useState();

  const handleSumbit = e => {
      e.preventDefeault();
  };

  return (
    <div>
        <form onSumbit={handleSumbit}>
            <Container>
                <Row className="form-group">
                    <Col size="12">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="search for book here"
                            name="search"
                            onChange={search => setSearch(search.target.value)}
                        />
                    </Col>
                </Row>
                <button className="btn btn-success" type="submit">Submit</button>
            </Container>
        </form>

        <Container>
            <Row>
                <Col size="12">
                    <div className="search-results">
                        {search}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);
};
 
export default Search;


  

