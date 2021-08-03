import React, { Component, Fragment } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchInput = (props) => {
  return (
    <Fragment>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search items"
          aria-label="Search items"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </Fragment>
  );
};

export default SearchInput;
