export default function Pagination({ totalPages, currentPage, onPageChange }) {
  function goToPage(page) {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  }

  return (
    <nav className="pagination" aria-label="Paginação da trilha">
      <button
        className="pagination-arrow"
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Ir para a página anterior"
      >
        ←
      </button>
      <div className="pagination-pages">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            className={page === currentPage ? 'pagination-page is-current' : 'pagination-page'}
            type="button"
            key={page}
            onClick={() => goToPage(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            aria-label={`Ir para a página ${page}`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="pagination-arrow"
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Ir para a próxima página"
      >
        →
      </button>
    </nav>
  );
}
