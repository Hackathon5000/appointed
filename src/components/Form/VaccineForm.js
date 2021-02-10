import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";

const Options = [
  { key: "y", text: "Yes", value: "true" },
  { key: "n", text: "No", value: "false" },
];

export default class VaccineForm extends Component {
  render() {
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
          <Form.Select
            required
            options={Options}
            placeholder="Florida Resident"
          />
          <Form.Select
            required
            options={Options}
            placeholder="Current Epi-Pen User"
          />
          <Form.Select
            required
            options={Options}
            placeholder="Front Line Medical Worker"
          />
          <Form.Select
            required
            options={Options}
            placeholder="Are you seeking your first dose?"
          />
          <Form.Field required>
            <label> Zipcode </label>{" "}
            <Input
              error="Please enter your phone number"
              fluid
              placeholder="Zip Code"
            />
          </Form.Field>
        </Form>{" "}
      </div>
    );
  }
}
