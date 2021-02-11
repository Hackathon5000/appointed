import React, { useState } from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

export default function VaccineForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const ParentDiv = styled.div`
    display: flex;
    justify-content: center;
  `;
  const ButtonColor = styled(Button)`
    &&& {
      background-color: #1da4bb;
    }
  `;
  const StyledButtonText = styled(Button.Content)`
    color: #ffffff;
  `;
  return (
    <div>
      <h1>Pre-Register Now For The COVID-19 Vaccine</h1>
      <ParentDiv>
        <Form>
          <Form.Field>
            <label> Date of Birth </label>{" "}
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </Form.Field>{" "}
          <Form.Input label="Name" placeholder="Enter your full legal name" />
          <Form.Input label="Email" placeholder="example@example.com" />
          <Form.Input label="Phone Number" placeholder="1234567890" />
          <Form.Checkbox inline label="Florida Resident" />
          <Form.Checkbox inline label="Current Epi-Pen User" />
          <Form.Checkbox inline label="Front Line Medical Worker" />
          <Form.Checkbox inline label="Are you seeking your first dose?" />
          <Form.Input label="Zip Code" placeholder="Enter your Zip Code" />
          <ButtonColor animated>
            <StyledButtonText visible>REGISTER</StyledButtonText>
            <StyledButtonText hidden>
              <Icon name="arrow right" />
            </StyledButtonText>
          </ButtonColor>
        </Form>{" "}
      </ParentDiv>
    </div>
  );
}
