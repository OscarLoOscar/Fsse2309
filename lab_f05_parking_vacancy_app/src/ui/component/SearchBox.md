import "./SearchBox.css"
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";

type Props = {

}

const SearchBox: React.FC<Props> = (props) => {
  return (
    <div className="box">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
          <Form.Label column sm="2">
            District
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="e.g.Kwun Tong" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
          <Form.Label column sm="2">Vehicle Type</Form.Label>
          <Col sm="10">
            <Form.Select>
              <option value="1"> Private Car</option>
              <option value="2"> LGV</option>
              <option value="3"> HGV</option>
              <option value="4"> Coach</option>
              <option value="5"> Motorcycle</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox">
        </Form.Group>
        <Button
          variant="primary"
          type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
}

export default SearchBox;