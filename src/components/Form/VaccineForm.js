import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";
// import styled from "styled-components";

export default class VaccineForm extends Component {
  render() {
    // const StyledInput = styled(Input)`
    //   width: 50%;
    // `;
    // const StyledDatePicker = styled(DatePicker)`
    //   width: 50%;
    // `;
    return (
      <div>
        <h1>Testing</h1>
        <Form>
          <Form.Field required>
            <label> Full Name </label>{" "}
            <Input
              error="Please enter your full name"
              fluid
              placeholder="Full Name"
            />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Email </label>{" "}
            <Input error="Please enter your email" fluid placeholder="Email" />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Phone Number </label>{" "}
            <Input
              error="Please enter your phone number"
              fluid
              placeholder="Phone Number"
            />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Date of Birth </label>{" "}
            <DatePicker error="Please enter your date of birth" fluid />
          </Form.Field>{" "}
        </Form>{" "}
      </div>
    );
  }
}
