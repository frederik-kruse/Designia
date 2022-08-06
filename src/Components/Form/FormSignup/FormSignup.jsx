import React from "react";
import validate from "../Validateinfo";
import useForm from "../UseForm/UseForm";
import { GoMail } from "react-icons/go";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm, //Form er blevet submittet, så vis besked at det gik igennem
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <input
            className="form-input"
            type="text"
            name="navn"
            placeholder="Skriv dit navn her"
            value={values.navn}
            onChange={handleChange}
          />
          {errors.navn && <p>{errors.navn}</p>}
        </div>
        <div className="form-inputs">
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Skriv din email her" //Tekst der bliver vist før man begynder at skrive i input
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <textarea
            className="form-textarea"
            type="besked"
            name="besked"
            placeholder="Skriv din besked her"
            value={values.besked}
            onChange={handleChange}
            maxLength={500} //Max længde på beskeden
          />
          {errors.besked && <p>{errors.besked}</p>}
          {/*Error besked der bliver vist vis der er en fejl */}
        </div>
        <button className="form-input-btn" type="submit">
          <GoMail className="BeskedIcon" /> Send
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
