import ReservationForm from "@/components/ReservationForm";
import ReservationTable from "@/components/ReservationTable";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type Reservation = {
  date: Date | string;
  time: string;
  guests: number | string;
  occasion: string;
};

const TableReservation = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ]);
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const reservationsFromLocalStorage = localStorage.getItem("reservations");
    if (reservationsFromLocalStorage) {
      setReservations(JSON.parse(reservationsFromLocalStorage));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Little Lemon | Table Reservation</title>
        <meta name="description" content=" Little Lemon restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="container-sm  space-v-lg mt-4 pt-4">
        <h2 className="display-3 text-center text-primary">Reserve a Table</h2>
        <div className="container w-75">
          <ReservationForm
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            reservations={reservations}
            setReservations={setReservations}
          />
          <ToastContainer />

          {reservations.length > 0 && (
            <>
              <hr />
              <h5 className="text-center display-5 my-4 pt-4">My Reservations</h5>
              <ReservationTable reservations={reservations} />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default TableReservation;
