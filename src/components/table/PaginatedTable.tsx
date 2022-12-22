import Next from "@icons/Next";
import Previous from "@icons/Previous";
import { BookingsData, UserData } from "@utils/types/mockDataTypes";
import React from "react";
import { useTable, Column, usePagination, useGlobalFilter } from "react-table";

export type TableProps = {
  data: Array<any>;
  columns: Array<Column>;
  // columns: Column<{}>[];
};
const PaginatedTable = ({ data, columns }: TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    { data: data, columns: columns },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex } = state;

  return (
    <>
      <div className="pb-10 overflow-auto w-full">
        <table
          {...getTableProps()}
          className="md:table w-full m-auto mt-6 text-sm text-left"
        >
          <thead className="bg-app-gray_3/25 text-app-gray_4">
            {headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                {headerGroup.headers.map((column, i) => (
                  <th
                    {...column.getHeaderProps()}
                    className="py-3 px-8"
                    key={i}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()} className="bg-white">
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index} className="text-left">
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        data-label={cell.column.Header}
                        {...cell.getCellProps()}
                        className="py-4 text-gray-900 min-w-min px-8"
                        key={i}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={8} className="bg-app-gray_3/25 rounded-b-2xl">
                <div className="flex justify-center space-x-6 py-2">
                  <ul className="flex space-x-4 items-center">
                    {pageOptions.map((page, i) => (
                      <li
                        key={i}
                        className={`ml-4 text-xs ${
                          pageIndex === page
                            ? "bg-app rounded-md px-[8px] py-[4px] text-white"
                            : ""
                        }`}
                      >
                        <button onClick={() => gotoPage(page)}>
                          <span>{page + 1}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    <Previous />
                  </button>
                  <button onClick={() => nextPage()} disabled={!canNextPage}>
                    <Next className={"#6A6B7A"} />
                  </button>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default PaginatedTable;


