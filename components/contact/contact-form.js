import { useContext, useEffect, useState } from "react";
import NotificationContext from "../../store/notification-context";
import classes from "./contact-form.module.css";

const ContactForm = () => {
  const { showNotification } = useContext(NotificationContext);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: ""
  });
  const [requestStatus, setRequestStatus] = useState({});
  const sendMessageHandler = async (e) => {
    e.preventDefault();
    try {
      setRequestStatus({
        title: "Sending message",
        message: "Your message is on its way.",
        status: "pending"
      });
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setRequestStatus({
        title: "Success",
        message: "Message stored successfully",
        status: "success"
      });
      setFormData({ email: "", name: "", message: "" });
    } catch (error) {
      setRequestStatus({
        title: "Error",
        message: error.message || "Something went wrong.",
        status: "error"
      });
    }
  };
  const onInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  useEffect(() => {
    showNotification(requestStatus);
  }, [requestStatus]);
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}></div>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            label="email"
            onChange={onInputChange}
            value={formData?.email}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            onChange={onInputChange}
            value={formData?.name}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your Message</label>
          <textarea
            id="message"
            rows="5"
            onChange={onInputChange}
            value={formData?.message}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
