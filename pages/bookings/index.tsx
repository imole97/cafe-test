import { Tab } from "@headlessui/react";
import MainLayout from "@layout/MainLayout";
import React, { ReactElement, useMemo, useState } from "react";
import classNames from "classnames";
import _data from "@utils/mockData/bookings.json";
import PaginatedTable from "src/components/table/PaginatedTable";
import { StatusPill } from "@atoms/StatusPill";
import { formatDateTime } from "@utils/dateTimeHelper";
import Next from "@icons/Next";
import SearchIcon from "@icons/SearchIcon";
import { SearchField } from "@atoms/SearchField";
import Link from "next/link";
import BodyContainer from "@atoms/BodyContainer";

type TTab = {
  id: number;
  title: string;
};

const Bookings = () => {
  const [searchValue, setSearchValue] = useState("");
  const TabMenu = [
    {
      id: 1,
      title: "All Bookings",
    },
    {
      id: 2,
      title: "Pending Bookings",
    },
    {
      id: 3,
      title: "Completed Bookings",
    },
  ];

  const data = _data;

  const columns = useMemo(
    () => [
      {
        Header: "Booking ID",
        accessor: "bookingId",
      },
      {
        Header: "User",
        accessor: "user",
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
        Cell: (props: { cell: { row: { original: any; }; }; }) => {
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

  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(e.target.value);
  };

  const filteredData =
    searchValue.trim() === ""
      ? data
      : data.filter((d) => {
          return (
            d.location.toLowerCase().includes(searchValue.toLowerCase()) ||
            d.bookingId.includes(searchValue)
          );
        });

  return (
    <>
      <BodyContainer className="">
        <h4 className="mb-4 pt-8">Bookings</h4>
        <div className="flex justify-between items-center phone-mini:flex-wrap space-y-4 sm:space-y-0">
          <Tab.Group>
            <Tab.List className="flex space-x-4 justify-between bg-white rounded-full py-2 px-2">
              {TabMenu.map((tab) => (
                <Tab
                  key={tab.id}
                  className={({ selected }) =>
                    classNames(
                      "p-2 active:bg-app-gray_3 rounded-full text-sm font-medium focus:outline-none",
                      selected ? "bg-app-gray_3" : ""
                    )
                  }
                >
                  {tab.title}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
          <SearchField
            onChange={handleSearch}
            value={searchValue}
            placeholder={"Search by booking id & location"}
          />
        </div>
        {/* @ts-ignore */}
        <PaginatedTable columns={columns} data={filteredData} />
      </BodyContainer>
    </>
  );
};

Bookings.getLayout = (page: ReactElement) => {
  return <MainLayout className="mt-52 bg-app-gray_5">{page}</MainLayout>;
};

export default Bookings;
