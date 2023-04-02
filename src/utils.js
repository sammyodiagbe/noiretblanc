export const validateData = (data) => {
  const errors = {};
  let { name, email, message } = data;
  email = email.trim();
  message = message.trim();
  const nameRegex = new RegExp(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/);
  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (!nameRegex.test(name)) {
    errors["name"] = "Invalid name";
  }
  if (!emailRegex.test(email)) {
    errors["email"] = "Invalid email address";
  }

  if (message.length <= 0) {
    errors["message"] = "Message body cannot be empty";
  }

  return errors;
};
