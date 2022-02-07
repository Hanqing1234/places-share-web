import "./NewPlace.css";

import Input from "../../shared/components/FormElements/Input";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input type="text" label="Title" element="input" validators={[]} onChange={[]} />
    </form>
  );
};

export default NewPlace;
