import React from 'react';
import PropTypes from 'prop-types';

const ReservationsTable = ({
  id, carName, city, reservationDate,
}) => (
  <>
    <tr id={`reservation-${id}`}>
      <td>{carName}</td>
      <td>{city}</td>
      <td>{reservationDate}</td>
    </tr>
  </>
);

ReservationsTable.propTypes = {
  id: PropTypes.number,
  carName: PropTypes.string,
  city: PropTypes.string,
  reservationDate: PropTypes.string,
}.isRequired;

export default ReservationsTable;
