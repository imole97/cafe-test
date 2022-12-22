import { formatDateTime } from '@utils/dateTimeHelper';
import { TBDetails } from '@utils/types/mockDataTypes';
import React from 'react'
import BookingCardDetails from './BookingCardDetails';

const BookingUserCard = ({props}:{props:TBDetails}) => {
  return (
    <>
      <BookingCardDetails
        header={"User Details"}
        details={`Signed up: ${formatDateTime(
          props.userDetails.signedUp,
          "dd MMMM, yyyy"
        )}`}
        detailStyle={"text-app-gray_2"}
        headerStyle={"font-medium text-xl"}
        className={"mb-4"}
      />
      <BookingCardDetails
        header={"Name"}
        details={props.userDetails.name}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-2"}
      />
      <BookingCardDetails
        header={"Email"}
        details={props.userDetails.emailAddress}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-2"}
      />
     
      <BookingCardDetails
        header={"Total Bookings"}
        details={props.userDetails.totalBooking}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-4"}
      />
      <hr className="mb-4" />
      <BookingCardDetails
        header={"Total amount of bookings"}
        details={props.userDetails.totalAmountOfBookings}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-4"}
      />
      
      <BookingCardDetails
        header={"Total amount of cafe order"}
        details={props.userDetails.totalAmountOfCafeOrder}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-2"}
      />
    </>
  );
}

export default BookingUserCard
