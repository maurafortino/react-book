import React, { Component } from "react";
import Container from "../../components/Container/index";
import Row from "../../components/Row/index";
import Col from "../../components/Col/index";
import Card from "../../components/Card/index";

class Saved extends Component {
  render() {
    return (
      <div>
        <h2>Saved</h2>
        <Container>
          <Row>
            <Col size="4">
              <Card title="harry potter" link="www.harrypotter.com" author="j.k. rowling" description="placeholder text" image="https://i.ytimg.com/vi/qaBU6M6Ao6Q/hqdefault.jpg"/>
            </Col>
            <Col size="4">
              <Card title="harry potter" link="www.harrypotter.com" author="j.k. rowling" description="placeholder text" image="https://i.ytimg.com/vi/qaBU6M6Ao6Q/hqdefault.jpg"/>
            </Col>
            <Col size="4">
              <Card title="harry potter" link="www.harrypotter.com" author="j.k. rowling" description="placeholder text" image="https://i.ytimg.com/vi/qaBU6M6Ao6Q/hqdefault.jpg"/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default Saved;