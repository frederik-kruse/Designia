export default function validateInfo(values) {
  let errors = {};

  if (!values.navn.trim()) {
    errors.navn = "Navn er nødvendig"; //erorr der siger du skal skrive et navn
  }

  if (!values.email) {
    errors.email = "Email er nødvendig";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //Email validation pattern
    errors.email = "Email er ikke korrekt";
  }
  if (!values.besked) {
    errors.besked = "Besked er nødvendig";
  } else if (values.besked.length < 5) {
    errors.besked = "Beskeden skal have 5 tegn";
  }
  return errors;
}
