import { WithClassname } from "@utils/types/types";
import React, { ReactElement } from "react";
export interface DCardProps extends WithClassname {
  header: string;
  details: string | number|ReactElement;
  headerStyle?: string;
  detailStyle?: string;
}
const BookingCardDetails = ({
  header,
  details,
  className,
  headerStyle,
  detailStyle,
}: DCardProps) => {
  return (
    <>
      <div className={`flex items-center justify-between ${className}`}>
        <div className="">
          <p className={headerStyle}>{header}</p>
        </div>
        <div>
          <p className={detailStyle}>{details}</p>
        </div>
      </div>
    </>
  );
};

export default BookingCardDetails;
