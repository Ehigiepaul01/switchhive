import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const CustomPagination = ({
  totalItems,
  totalPages,
  limit,
  currentPage,
  setCurrentPage,
}) => {
  const startIndex = (currentPage - 1) * limit + 1;
  const endIndex = Math.min(startIndex + limit - 1, totalItems);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="flex items-center justify-between w-full mt-5">
      <h1 className="text-[#ADADAD]">
        Showing {startIndex} to {endIndex} out of {totalItems} records
      </h1>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {/* Render pagination links */}
          {totalPages > 10 ? (
            <>
              {/* First page */}
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === 1}
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              {/* Pages between currentPage - 2 and currentPage + 2 */}
              {[...Array(totalPages - 4)].map((_, index) => {
                const pageNumber = currentPage - 2 + index;
                if (
                  pageNumber > 1 &&
                  pageNumber < totalPages &&
                  Math.abs(currentPage - pageNumber) <= 5
                ) {
                  return (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        isActive={pageNumber === currentPage}
                        onClick={() => setCurrentPage(pageNumber)}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                return null;
              })}
              {/* Pagination ellipsis */}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              {/* Last page */}
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === totalPages}
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          ) : (
            // Render all pages if totalPages is less than or equal to 10
            [...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={index + 1 === currentPage}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))
          )}
          <PaginationItem>
            <PaginationNext
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CustomPagination;
