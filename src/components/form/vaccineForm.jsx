import React, { useState } from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

export default function VaccineForm() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [selectedDate, setSelectedDate] = useState(null);
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const [zipCode, setZipCode] = useState(" ");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You have been pre-registered to receive the vaccine!`);
  };
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
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="First Name"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <Form.Input
            label="Last Name"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <Form.Input
            label="Email"
            placeholder="example@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Input
            label="Phone Number"
            placeholder="1234567890"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <Form.Field>
            <label> Date of Birth </label>{" "}
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </Form.Field>{" "}
          <Form.Checkbox
            inline
            label="Florida Resident"
            onClick={handleClick}
            checked={checked}
          />
          <Form.Checkbox
            inline
            label="Current Epi-Pen User"
            onClick={handleClick}
            checked={checked}
          />
          <Form.Checkbox
            inline
            label="Front Line Medical Worker"
            onClick={handleClick}
            checked={checked}
          />
          <Form.Checkbox
            inline
            label="Are you seeking your first dose?"
            onClick={handleClick}
            checked={checked}
          />
          <Form.Input
            label="Zip Code"
            placeholder="Enter your Zip Code"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
          />
          <ButtonColor animated type="submit" value="Submit">
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
