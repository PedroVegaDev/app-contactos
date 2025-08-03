import React from "react";
import { useForm } from "react-hook-form";
import { createContact } from "../firebase/functions";

function FormCreateContact() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(createContact)} id="formulario">
      <div className="form-group">
        <label htmlFor="first_name">
          Nombres <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          {...register("first_name")}
          className="form-control"
          id="first_name"
          name="first_name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="last_name">
          Apellidos <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          {...register("last_name")}
          className="form-control"
          id="last_name"
          name="last_name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Correo <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          {...register("email")}
          className="form-control"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="avatar">Avatar</label>
        <input
          type="file"
          {...register("avatar")}
          className="form-control-file"
          id="avatar"
          name="avatar"
          accept=".jpg, .png"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block mt-4">
        Guardar
      </button>
    </form>
  );
}

export default FormCreateContact;
