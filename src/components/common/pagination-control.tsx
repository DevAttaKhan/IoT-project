import { Table } from "@tanstack/react-table";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import ReactPaginate from "react-paginate";
interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const handlePageChange = (page: { selected: number }) => {
    table.setPageIndex(page.selected);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ArrowRightIcon className="h-4 w-4 " />}
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={table.getPageCount()}
        previousLabel={<ArrowLeftIcon className="h-4 w-4 " />}
        renderOnZeroPageCount={null}
        containerClassName="flex items-center gap-6 mx-auto text-slate-500"
        activeLinkClassName="text-green-500"
        nextLinkClassName="block p-3 rounded-xl hover:shadow-lg hover:text-black"
        previousLinkClassName="block p-3 rounded-xl hover:shadow-lg hover:text-black"
      />
    </>
  );
}
