import React, { useState } from "react";
import api from "../api";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/contact", form);
    setStatus("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px", margin: "auto" }}>
      <input type="text" placeholder="Name" required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <textarea placeholder="Message" required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
}
