import { useState } from "react";
import validator from "validator";

export const useForm = (values = {}) => {
  const [formValues, setFormValues] = useState(values);
  const [errors, setError] = useState({});

  const sliceValue = (value, latestValue) => value.slice(0, latestValue);

  const onInputChange = ({ target }) => {
    const names = {
      name: target.value,
      cardNumber: sliceValue(target.value, 16),
      month: sliceValue(target.value, 2),
      year: sliceValue(target.value, 2),
      cvc: sliceValue(target.value, 3),
    };

    setFormValues({
      ...formValues,
      [target.name]: names[target.name],
    });
  };

  const onValidate = ({ target }) => {
    if (validator.isEmpty(target.value)) {
      setError({
        ...errors,
        [target.name]: "El campo no puede estar vacio",
      });
    }

    if (target.name === "cardNumber") {
      if (!validator.isCreditCard(target.value)) {
        setError({
          ...errors,
          [target.name]: "Numero de tarjeta no valido",
        });
      }
    }

    if (target.name === "month" && target.value > 12) {
      setError({
        ...errors,
        [target.name]: "Solo hay 12 meses",
      });
    }

    if (target.name === "year") {
      const date = new Date().getFullYear() + "";
      const year = Number(date.slice(2, 4));
      if (target.value < year) {
        setError({
          ...errors,
          [target.name]: "Tu tarjeta ya expiro",
        });
      } else {
        setError({
          ...errors,
          [target.name]: "",
        });
      }
    }
  };

  return [formValues, errors, onInputChange, onValidate];
};
