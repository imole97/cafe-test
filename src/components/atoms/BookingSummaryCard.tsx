import { formatDateTime } from "@utils/dateTimeHelper";
import { TBDetails, TUserDetails } from "@utils/types/mockDataTypes";
import React from "react";
import BookingCardDetails from "./BookingCardDetails";
import { StatusPill } from "./StatusPill";

const BookingSummaryCard = ({ props }:{props:TBDetails}) => {
  return (
    <>
      <BookingCardDetails
        header={"Booking Summary"}
        details={`Created: ${formatDateTime(props.created, "dd MMMM, yyyy")}`}
        detailStyle={"text-app-gray_2"}
        headerStyle={"font-medium text-xl"}
        className={"mb-4"}
      />
      <BookingCardDetails
        header={"Booking Date"}
        details={formatDateTime(props.bookingDate, "dd MMMM, yyyy")}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-2"}
      />
      <BookingCardDetails
        header={"Status"}
        details={<StatusPill value={props.status} />}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-2"}
      />
      <BookingCardDetails
        header={"Location"}
        details={props.location}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-2"}
      />
      <BookingCardDetails
        header={"Plan"}
        details={props.plan}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-2"}
      />
      <BookingCardDetails
        header={"Seats"}
        details={props.seats}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-3"}
      />
      <hr className="mb-2" />
      <BookingCardDetails
        header={"Booking Amount"}
        details={props.bookingAmount}
        detailStyle={"text-app"}
        headerStyle={"text-app-gray_2"}
        className={"mb-2"}
      />
      {props.orders.map((order) => (
        <BookingCardDetails
          header={order.item}
          details={order.price}
          detailStyle={"text-app"}
          headerStyle={"text-app-gray_2"}
          className={"mb-3"}
        />
      ))}
          <hr className="mb-2"/>
      <BookingCardDetails
        header={"Total"}
        details={props.totalAmount}
        detailStyle={"text-app font-semibold"}
        headerStyle={"text-app"}
        className={"mb-2"}
      />
    </>
  );
};

export default BookingSummaryCard;
