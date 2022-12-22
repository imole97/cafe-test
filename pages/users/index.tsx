import React, { ReactElement, useMemo, useState } from "react";
import { Tab } from "@headlessui/react";
import MainLayout from "@layout/MainLayout";
import PaginatedTable from "src/components/table/PaginatedTable";
import classNames from "classnames";
import _data from "@utils/mockData/users.json";
import { formatDateTime } from "@utils/dateTimeHelper";
import Next from "@icons/Next";
import { SearchField } from "@atoms/SearchField";
import Link from "next/link";
import BodyContainer from "@atoms/BodyContainer";
import { Column } from "react-table";
import { UserData } from "@utils/types/mockDataTypes";

const Users = () => {
  const [searchValue, setSearchValue] = useState("");

  const TabMenu = [
    {
      id: 1,
      title: "All Users",
    },
    {
      id: 2,
      title: "Deactivated",
    },
  ];

  const data = _data;

  const columns = useMemo(
    () =>
      [
        {
          Header: "User",
          accessor: "user",
        },
        {
          Header: "Email address",
          accessor: "emailAddress",
        },
        {
          Header: "Bookings",
          accessor: "bookings",
        },
        {
          Header: "Amount spent",
          accessor: "amountSpent",
        },
        {
          Header: "Account Created",
          accessor: "accountCreated",
          Cell: ({ value }: { value: string }) =>
            formatDateTime(value, "dd MMM yyyy"),
        },
        {
          Header: "Actions",
          Cell: (props: { cell: { row: { original: any } } }) => {
            const user = props?.cell?.row?.original;

            return (
              <Link href={`/users/user-details/${user.id}`}>
                <button className="bg-app px-2 py-1 flex text-white items-center space-x-3 rounded-lg font-light">
                  <span>View</span>
                  <Next className={"#FFFFFF"} />
                </button>
              </Link>
            );
          },
        },
      ] as Column<UserData>[],
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
          return d.user.toLowerCase().includes(searchValue.toLowerCase());
        });

  return (
    <>
      <BodyContainer className="">
        <h4 className="mb-4 pt-8">Registered Users</h4>
        <div className="flex items-center justify-between phone-mini:flex-wrap space-y-4 sm:space-y-0">
          <Tab.Group>
            <Tab.List className="flex space-x-3 justify-between bg-white rounded-full py-2 px-2">
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
            placeholder={"Search Users"}
          />
        </div>
        {/* @ts-ignore */}
        <PaginatedTable columns={columns} data={filteredData} />
      </BodyContainer>
    </>
  );
};

Users.getLayout = (page: ReactElement) => {
  return <MainLayout className="mt-48 bg-app-gray_5">{page}</MainLayout>;
};
export default Users;
