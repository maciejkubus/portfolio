"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import { Alert, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { FaArrowCircleUp } from "react-icons/fa";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message: any, type: any) => {
    // FIX any
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data: any) => {
    // FIX any
    // Destrcture data object
    const { name, email, message, consent } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        message,
        consent,
      };

      // Use emailjs to email contact form data
      //   await emailjs.send(
      //     import.meta.env.VITE_SERVICE_ID,
      //     import.meta.env.VITE_TEMPLATE_ID,
      //     templateParams,
      //     import.meta.env.VITE_PUBLIC_KEY,
      //   );

      // Display success alert
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert("Uh oh. Something went wrong.", "failure");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className="p-6 border-2 border-black rounded-3xl shadow-shadow w-full">
      <h2 className="font-bold text-3xl my-4">Skontaktuj się z nami</h2>
      <div className="ContactForm">
        <div className="">
          <form
            className="flex flex-col gap-4"
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Imię i nazwisko" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="John Doe"
                required
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                color={errors.name ? "failure" : ""}
                helperText={
                  errors.name && (
                    <span className="errorMessage">
                      {errors.name.message?.toString()}
                    </span>
                  )
                }
              />
            </div>
            <div>
              <div className="w-full grid grid-cols-2 gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="E-mail" />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="example@mail.com"
                    required
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    color={errors.email ? "failure" : ""}
                    helperText={
                      errors.email && (
                        <span className="errorMessage">
                          Please enter a valid email address
                        </span>
                      )
                    }
                  />
                </div>
                <div>{/* telefon */}</div>
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="message" value="Wiadomość" />
              </div>
              <Textarea
                id="message"
                placeholder="Some text..."
                required
                rows={4}
                {...register("message", {
                  required: true,
                })}
                color={errors.message ? "failure" : ""}
                helperText={
                  errors.message && (
                    <span className="errorMessage">Please enter a message</span>
                  )
                }
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="consent"
                {...register("consent", {
                  required: {
                    value: true,
                    message: "Please tick the checkbox",
                  },
                })}
              />
              <Label htmlFor="consent">
                Wyrażam zgodę na przetwarzanie danych osobowych bla bla bla
              </Label>
            </div>
            {errors.consent && (
              <p className="block text-sm text-red-600 dark:text-red-500">
                <FaArrowCircleUp className="inline mr-1 h-4 w-4" />
                <span>Please tick the checkbox</span>
              </p>
            )}

            <button
              className="bg-primary rounded-xl font-bold px-6 py-3 text-white self-end"
              disabled={disabled}
            >
              Wyślij
            </button>
          </form>
        </div>

        {alertInfo.display && (
          <Alert
            color={alertInfo.type}
            className="fixed top-0 left-0"
            onDismiss={() =>
              setAlertInfo({ display: false, message: "", type: "" })
            } // Clear the alert when close button is clicked
          >
            {alertInfo.message}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
