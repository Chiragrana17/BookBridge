import React, { useState } from "react";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Here you can submit the form data
      console.log(formData);
      setFormSubmitted(true);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white  h-screen items-center justify-center">
      <h2 className="text-2xl font-bold mb-4 ">Contact Us</h2>
      {formSubmitted ? (
        <p className="text-green-600">Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full border-gray-300 rounded-md ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full border-gray-300 rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full border-gray-300 rounded-md ${
                errors.message ? "border-red-500" : ""
              }`}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Contacts;
