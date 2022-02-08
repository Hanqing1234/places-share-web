import { useState } from "react";

import "./NewPlace.css";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const NewPlace = () => {
  const [formState, setFormState] = useState(false);

  const inputHandler = (isValid) => {
      setFormState(isValid);
  }

  const placeSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        type="text"
        label="Title"
        element="input"
        errorText="Please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="description"
        label="Description"
        element="textarea"
        errorText="Please enter a valid description"
        validators={[VALIDATOR_REQUIRE()]}
        onChange={[]}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState}>ADD PLACE</Button>
    </form>
  );
};

export default NewPlace;
