// Hooks
import { ChangeEvent, useState } from "react";
import { useAuth } from "../../hooks";

// Styles
import "./styles.css";

type UserInfo = {
  name?: string;
  lastName?: string;
  age?: number;
};

export default function Admin() {
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const { user } = useAuth();

  function handleUserInfoChange(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setUserInfo((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
      <div className="profile-card w-25 d-flex flex-column align-items-center">
        <i className="bi bi-person-circle person"></i>
        <p>Hello {user.user}</p>
        <p>{userInfo?.name}</p>
        <p>{userInfo?.lastName}</p>
        <p>{userInfo?.age}</p>
      </div>

      <div className="form-user w-25 mt-5">
        <form>
          <div className="form-group mb-4">
            <label htmlFor="name" className="mb-1">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="nameHelp"
              placeholder="Nombre"
              onChange={handleUserInfoChange}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="lastName" className="mb-1">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="lastnameHelp"
              name="lastName"
              placeholder="Apellido"
              onChange={handleUserInfoChange}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="lastName" className="mb-1">
              Edad
            </label>
            <input
              type="text"
              className="form-control"
              id="age"
              aria-describedby="lastnameHelp"
              name="age"
              placeholder="Edad"
              onChange={handleUserInfoChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
