import React, { Component } from "react";
import { Form, Input } from "semantic-ui-css";
import DatePicker from "react-datepicker";
import styled from "styled-components";

export default class VaccineForm extends Component {
  render() {
    const StyledInput = styled(Input)`
      width: 50%;
    `;
    const StyledDatePicker = styled(DatePicker)`
      width: 50%;
    `;
    return (
      <div>
        <Form>
          <Form.Field required>
            <label> First Name </label> <StyledInput placeholder="Legal Name" />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Last Name </label> <StyledInput placeholder="Legal Name" />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Email </label> <StyledInput placeholder="Email" />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Phone Number </label>{" "}
            <StyledInput placeholder="Phone Number" />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Date of Birth </label> <StyledDatePicker />
          </Form.Field>
        </Form>
      </div>
    );
  }
}
