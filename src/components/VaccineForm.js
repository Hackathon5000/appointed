import React, { Component } from "react";
import { Form, Input } from "semantic-ui-css";
import DatePicker from "react-datepicker";

export default class VaccineForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Field required>
            <label> First Name </label> <Input placeholder="Legal Name" />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Last Name </label> <Input placeholder="Legal Name" />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Email </label> <Input placeholder="Email" />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Date of Birth </label> <DatePicker />
          </Form.Field>
        </Form>
      </div>
    );
  }
}
