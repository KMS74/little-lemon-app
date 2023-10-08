import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Reservation } from "@/pages/reservation";

type Props = {
  availableTimes: string[];
  setAvailableTimes: React.Dispatch<React.SetStateAction<string[]>>;
  reservations: Reservation[];
  setReservations: React.Dispatch<React.SetStateAction<Reservation[]>>;
};

const ReservationForm: React.FC<Props> = ({
  availableTimes,
  setAvailableTimes,
  reservations,
  setReservations,
}) => {
  const initialValues: Reservation = {
    date: "",
    time: "",
    guests: "",
    occasion: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "Minimum 1 guest")
        .max(10, "Maximum 10 guests")
        .required("Number of guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // add reservation to state here
      setReservations([...reservations, values]);
      // persist to local storage
      localStorage.setItem(
        "reservations",
        JSON.stringify([...reservations, values])
      );

      resetForm();
    },
  });

  const {
    handleSubmit,
    setErrors,
    setFieldValue,
    values,
    errors,
    getFieldProps,
    touched,
    resetForm,
  } = formik;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    const today = new Date();
    if (date < today) {
      setErrors({ date: "Date must be in the future" });
      return;
    } else {
      setErrors({ date: "" });
      setFieldValue("date", e.target.value);
      updateTimes(date);
    }
  };

  // set available times based on date
  const updateTimes = (date: Date) => {
    const day = date.getDay();
    if (day > 3) {
      setAvailableTimes(["17:00", "18:00", "19:00", "20:00"]);
    } else {
      setAvailableTimes(["12:00", "13:00", "14:00", "15:00"]);
    }
  };
  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Choose Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          {...getFieldProps("date")}
          onChange={handleDateChange}
        />
        <small id="date" className="form-text text-danger">
          {touched.date && errors.date ? errors.date : null}
        </small>
      </div>
      <div className="mb-3">
        <label htmlFor="res-time">Choose time</label>
        <select
          className="form-select"
          id="res-time"
          {...getFieldProps("time")}
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <small id="time" className="form-text text-danger">
          {touched.time && errors.time ? errors.time : null}
        </small>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="guests">
          Number of guests
        </label>
        <input
          className="form-control"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          {...getFieldProps("guests")}
        />

        <small id="guests" className="form-text text-danger">
          {touched.guests && errors.guests ? errors.guests : null}
        </small>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="occasion">
          Occasion
        </label>
        <select
          className="form-select"
          id="occasion"
          {...getFieldProps("occasion")}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Business meeting</option>
          <option>Friends gathering</option>
          <option>Other</option>
        </select>
        <small id="occasion" className="form-text text-danger">
          {touched.occasion && errors.occasion ? errors.occasion : null}
        </small>
      </div>
      <button className="btn btn-secondary btn-lg" type="submit">
        Reserve Table
      </button>
    </form>
  );
};

export default ReservationForm;
