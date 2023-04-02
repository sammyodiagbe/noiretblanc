export const validateData = (data) => {
  const errors = {};
  let { firstname, lastname, email, message } = data;
  firstname = firstname.trim();
  lastname = lastname.trim();
  email = email.trim();
  message = message.trim();
  const nameRegex = new RegExp(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/);
  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (!nameRegex.test(firstname)) {
    errors["firstname"] = "Invalid name";
  }

  if (!nameRegex.test(lastname)) {
    errors["lastname"] = "Invalid name";
  }

  if (!emailRegex.test(email)) {
    errors["email"] = "Invalid email address";
  }

  if (message.length <= 0) {
    errors["message"] = "Message body cannot be empty";
  }

  return errors;
};
