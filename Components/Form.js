import React, { useState } from "react";

import styles from "../styles/form.module.scss";

export default function Form() {
  const [query, setQuery] = useState({
    email: "",
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/ec0f15b3-51a2-46ab-abc5-c996107ac09c", {
      method: "POST",
      body: formData,
    }).then(() =>
      setQuery({
        name: "",
        email: "",
        message: "",
      })
    );
  };

  return (
    <div className={styles.form}>
      <form onSubmit={formSubmit}>
        <div className={styles.getform}>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter you email"
            className={styles.emailForm}
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <button className={styles.emailBut} type="submit">
          Sign up
        </button>

        <div className={styles.message}>Thanks! Your form was send.</div>
      </form>
    </div>
  );
}
