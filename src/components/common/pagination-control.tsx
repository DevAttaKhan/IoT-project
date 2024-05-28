import { Table } from "@tanstack/react-table";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <>
      <div className="flex justify-center items-baseline space-x-6 lg:space-x-8 text-muted-foreground w-full">
        <button
          className="h-8 w-8 p-3 rounded-full hover:shadow grid place-content-centerss"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ArrowLeftIcon className="h-4 w-4" />
        </button>
        {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(
          (el) => (
            <button
              className={classNames("hover:text-green-500", {
                "text-green-500":
                  table.getState().pagination.pageIndex === el - 1,
              })}
              key={el}
              onClick={() => {
                table.setPageIndex(el - 1);
              }}
            >
              {el}
            </button>
          )
        )}
        <button
          className="h-8 w-8 p-3 rounded-full hover:shadow grid place-content-centerss"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}
