import React from 'react';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export function Pagination({
  currentPage,
  totalPages,
  onPageChange
}: PaginationProps) {
  return <div className="flex justify-center items-center mt-8">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-[#1A3C40] font-medium">PAGE</span>
        {Array.from({
        length: totalPages
      }, (_, i) => i + 1).map(page => {
        if (page === 1 || page === totalPages || page >= currentPage - 1 && page <= currentPage + 1) {
          return <button key={page} onClick={() => onPageChange(page)} className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${currentPage === page ? 'bg-[#1A3C40] text-white' : 'text-[#1A3C40] hover:bg-gray-100'}`}>
                {page}
              </button>;
        } else if (page === 2 || page === totalPages - 1) {
          return <span key={page} className="text-[#1A3C40]">
                ...
              </span>;
        }
        return null;
      })}
      </div>
    </div>;
}