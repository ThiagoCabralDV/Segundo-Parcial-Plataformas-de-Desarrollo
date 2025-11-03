import { useState, useEffect } from "react";

export default function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Cargar mensajes guardados en localStorage al iniciar
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    setMessages(savedMessages);
  }, []);

  // Guardar mensajes en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("contactMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newMessage = { name, email, message, date: new Date().toLocaleString() };
    setMessages([...messages, newMessage]);

    // Resetear formulario
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mt-4">
      <h1 className="titulo-fondo">Contacto</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Enviar Mensaje
        </button>
      </form>

      <h2>Mensajes enviados</h2>
      {messages.length === 0 ? (
        <p>No hay mensajes.</p>
      ) : (
        <ul className="list-group">
          {messages.map((msg, index) => (
            <li key={index} className="list-group-item">
              <strong>{msg.name} ({msg.email})</strong> <br />
              <small>{msg.date}</small>
              <p>{msg.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
