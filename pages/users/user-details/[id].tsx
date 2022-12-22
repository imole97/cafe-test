import MainLayout from "@layout/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import { ReactElement, useMemo } from "react";
import _data from "@utils/mockData/userDetail.json";
import UserCard from "@atoms/UserCard";
import Next from "@icons/Next";
import PaginatedTable from "src/components/table/PaginatedTable";
import { StatusPill } from "@atoms/StatusPill";
import { formatDateTime } from "@utils/dateTimeHelper";
import Link from "next/link";
import BodyContainer from "@atoms/BodyContainer";
import { TUserDetails } from "@utils/types/mockDataTypes";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query?.id as string;
  const user = _data.find((d) => d.id === id);

  if (!id || !user) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  return {
    props: { ...user },
  };
};

const UserDetails = (props: TUserDetails) => {
  const data = props.bookings;

  const columns = useMemo(
    () => [
      {
        Header: "Booking ID",
        accessor: "bookingId",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Plan",
        accessor: "plan",
      },
      {
        Header: "Seats",
        accessor: "seats",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Booking Date",
        accessor: "bookingDate",
        Cell: ({ value }: { value: string }) =>
          formatDateTime(value, "dd MMM yyyy"),
      },
      {
        Header: "Actions",
        Cell: (props: { cell: { row: { original: any } } }) => {
          const booking = props?.cell?.row?.original;

          return (
            <Link href={`/bookings/booking-details/${booking.bookingId}`}>
              <button className="bg-app px-2 py-1 flex text-white items-center space-x-3 rounded-lg font-light">
                <span>View</span>
                <Next className={"#FFFFFF"} />
              </button>
            </Link>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <BodyContainer className="">
        <div className="flex items-center mb-3 space-x-2 pt-8">
          <h5 className="">User</h5>
          <Next className={"#343437"} />
          <p>{props.name}</p>
        </div>
        <div className="grid grid-cols-2 mb-8">
          <div className="bg-white w-full rounded-2xl p-6">
            <UserCard props={props} />
          </div>
        </div>
        <h3>Bookings</h3>
        {/* @ts-ignore */}
        <PaginatedTable columns={columns} data={data} />
      </BodyContainer>
    </>
  );
};

UserDetails.getLayout = (page: ReactElement) => {
  return <MainLayout className="mt-20 bg-app-gray_5">{page}</MainLayout>;
};

export default UserDetails;
