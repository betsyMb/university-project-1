// React
import { FormEvent } from "react";

// Styles
import "./styles.css";
import { useAuth } from "../../hooks";

export default function Login() {
  const { login } = useAuth();
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const inputsTarget = target.getElementsByTagName("input");
    const inputs = Array.from(inputsTarget);
    login({ user: inputs[0].value, password: inputs[1].value });
  }
  return (
    <div className="d-flex justify-content-center align-items-center form-container">
      <form className="form p-4" onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="email" className="mb-1">
            Correo Electronico
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            aria-describedby="emailHelp"
            placeholder="Introduzca su correo Electronico"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="mb-1">
            Password
          </label>
          <input type="password" className="form-control" id="password" placeholder="Introduzca su Contraseña" />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
