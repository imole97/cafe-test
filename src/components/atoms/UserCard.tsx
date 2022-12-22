import { formatDateTime } from '@utils/dateTimeHelper';
import { TBDetails, TUserDetails } from '@utils/types/mockDataTypes';
import React from 'react'
import BookingCardDetails from './BookingCardDetails';

const UserCard = ({props}:{props:TUserDetails}) => {
  return (
    <>
      <BookingCardDetails
        header={"User Details"}
        details={`Signed up: ${formatDateTime(
          props.signedUp,
          "dd MMMM, yyyy"
        )}`}
        detailStyle={"text-app-gray_2"}
        headerStyle={"font-medium text-xl"}
        className={"mb-4"}
      />
      <BookingCardDetails
        header={"Name"}
        details={props.name}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-2"}
      />
      <BookingCardDetails
        header={"Email"}
        details={props.emailAddress}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-2"}
      />

      <BookingCardDetails
        header={"Total Bookings"}
        details={props.totalBooking}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-4"}
      />
      <hr className="mb-4" />
      <BookingCardDetails
        header={"Total amount of bookings"}
        details={props.totalAmountOfBookings}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-4"}
      />

      <BookingCardDetails
        header={"Total amount of cafe order"}
        details={props.totalAmountOfCafeOrder}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-2"}
      />
    </>
  );
}

export default UserCard
