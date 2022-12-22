import MainLayout from "@layout/MainLayout";
import { ReactElement } from "react";
import _data from "@utils/mockData/bookingDetails.json";
import { GetServerSideProps } from "next";

import BookingSummaryCard from "@atoms/BookingSummaryCard";

import BookingUserCard from "@atoms/BookingUserCard";
import Next from "@icons/Next";
import BodyContainer from "@atoms/BodyContainer";
import { TBDetails } from "@utils/types/mockDataTypes";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query?.id as string;
  const booking = _data.find((c) => c.id === id);

  if (!id || !booking) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  return {
    props: { ...booking },
  };
};

const BookingDetails = (props:TBDetails) => {
  return (
    <>
      <BodyContainer>
        <div className="flex items-center mb-3 space-x-2 pt-10">
          <h5 className="">Bookings</h5>
          <Next className={"#343437"} />
          <p>Bookings {props.id}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-8">
          <div className="bg-white rounded-2xl p-6">
            <BookingSummaryCard props={props} />
          </div>
          <div className="bg-white rounded-2xl p-6 h-[45vh]">
            <BookingUserCard props={props} />
          </div>
        </div>
      </BodyContainer>
    </>
  );
};

BookingDetails.getLayout = (page: ReactElement) => {
  return <MainLayout className="mt-20 bg-app-gray_5">{page}</MainLayout>;
};

export default BookingDetails;
