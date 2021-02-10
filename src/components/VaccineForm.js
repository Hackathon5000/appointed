import React, { Component } from "react";
import { Form, Input } from "semantic-ui-css";

export default class VaccineForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Field required inline>
            <label> First Name </label> <Input placeholder="Legal Name" />
          </Form.Field>{" "}
          <Form.Field required inline>
            <label> Last Name </label> <Input placeholder="Legal Name" />
          </Form.Field>{" "}
          <Form.Field required inline>
            <label> Email </label> <Input placeholder="Legal Name" />
          </Form.Field>{" "}

        </Form>
      </div>
    );
  }
}
