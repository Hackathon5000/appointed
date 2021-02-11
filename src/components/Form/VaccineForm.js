import React, { useState } from "react";
import { Form, Input, Button, Icon } from "semantic-ui-react";
import DatePicker from "react-datepicker";

export default function VaccineForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <h1>Pre-Register Now For The COVID-19 Vaccine</h1>
      <p>
        For more information and updates regarding the COVID-19 vaccine in
        Florida and to be notified when new appointments are available in your
        area, please submit your email and additional information below.
      </p>
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
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            error="Please enter your date of birth"
            fluid
          />
        </Form.Field>{" "}
        <Form.Checkbox required label="Florida Resident" />
        <Form.Checkbox required label="Current Epi-Pen User" />
        <Form.Checkbox required label="Front Line Medical Worker" />
        <Form.Checkbox required label="Are you seeking your first dose?" />
        <Form.Field required>
          <label> Zipcode </label>{" "}
          <Input
            error="Please enter your phone number"
            fluid
            placeholder="Zip Code"
          />
        </Form.Field>
        <Button animated>
          <Button.Content visible>GET IN LINE</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Form>{" "}
    </div>
  );
}
