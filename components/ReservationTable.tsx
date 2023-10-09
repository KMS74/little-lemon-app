import { Reservation } from "@/pages/reservation";
import React from "react";

const ReservationTable = ({
  reservations,
}: {
  reservations: Reservation[];
}) => {
  return (
    <table className="table">
      <thead className="fs-5">
        <tr>
          <th className="text-primary fw-bold">#</th>
          <th className="text-primary fw-bold">Date</th>
          <th className="text-primary fw-bold">Time</th>
          <th className="text-primary fw-bold">Guests</th>
          <th className="text-primary fw-bold">Occasion</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation, index) => (
          // reservation row
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              {typeof reservation.date === "string"
                ? reservation.date
                : reservation.date.toLocaleDateString()}
            </td>
            <td>{reservation.time}</td>
            <td>{reservation.guests}</td>
            <td>{reservation.occasion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReservationTable;
