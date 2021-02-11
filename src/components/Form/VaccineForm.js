import React, { useState } from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

export default function VaccineForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const MoveToCenter = styled(Form.Input)`
    position: relative;
    left: 400px;
  `;
  const AlignedResident = styled(Form.Checkbox)`
    position: relative;
    right: 16px;
  `;
  const AlignedWorker = styled(Form.Checkbox)`
    position: relative;
    left: 16px;
  `;
  const AlignedDose = styled(Form.Checkbox)`
    position: relative;
    left: 31px;
  `;
  const AlignZipCode = styled(Form.Input)`
    position: relative;
    left: 525px;
  `;
  const ButtonBackground = styled(Button)`
    background-color: #1da4bb;
  `;
  const StyledButtonText = styled(Button.Content)`
    color: #ffffff;
  `;
  return (
    <div>
      <h1>Pre-Register Now For The COVID-19 Vaccine</h1>
      <Form>
        <MoveToCenter
          label="Name"
          placeholder="Enter your full legal name"
          width={6}
        />
        <MoveToCenter
          label="Email"
          placeholder="example@example.com"
          width={6}
        />
        <MoveToCenter label="Phone Number" placeholder="1234567890" width={6} />
        <Form.Field>
          <label> Date of Birth </label>{" "}
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </Form.Field>{" "}
        <AlignedResident inline label="Florida Resident" />
        <Form.Checkbox inline label="Current Epi-Pen User" />
        <AlignedWorker inline label="Front Line Medical Worker" />
        <AlignedDose inline label="Are you seeking your first dose?" />
        <AlignZipCode
          label="Zip Code"
          placeholder="Enter your Zip Code"
          width={3}
        />
        <ButtonBackground animated>
          <StyledButtonText visible>REGISTER</StyledButtonText>
          <StyledButtonText hidden>
            <Icon name="arrow right" />
          </StyledButtonText>
        </ButtonBackground>
      </Form>{" "}
    </div>
  );
}
