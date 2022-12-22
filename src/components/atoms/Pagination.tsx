import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TBlog } from "@utils/types/types";
import Previous from "@icons/Previous";
import Next from "@icons/Next";

export type PProps = {
  pages: number;
  setCurrentPage: Dispatch<SetStateAction<number | null>>;
  entries: TBlog[];
};

const Pagination = ({ pages, setCurrentPage, entries }: PProps) => {
  const numOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <>
      <div className="flex justify-center items-center pb-8">
        <ul className="flex items-center">
          {numOfPages.map((page, i) => (
            <li
              key={i}
              className={`ml-4 text-xs ${
                currentButton === page
                  ? "bg-app rounded-md px-[8px] py-[4px] text-white"
                  : ""
              }`}
            >
              <button onClick={() => setCurrentButton(page)}>
                <span>{page}</span>
              </button>
            </li>
          ))}
          <li className="ml-4">
            <button
              onClick={() =>
                setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
              }
              disabled={currentButton === 1}
            >
              <Previous />
            </button>
          </li>
          <li className="ml-4">
            <button
              onClick={() =>
                setCurrentButton((next) =>
                  next === numOfPages.length ? next : next + 1
                )
              }
              disabled={currentButton === numOfPages.length}
            >
              <Next className={"#6A6B7A"} />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
