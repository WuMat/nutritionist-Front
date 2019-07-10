import React, { memo } from "react";
import "./pagination.scss";

interface IProps {
  total: number;
  page: number;
  onChange: any;
}
const Pagination = memo(({ total, page, onChange }: IProps) => {
  // console.log("object");

  const handleClickPage = (val: number) => {
    onChange(val);
  };

  const renderPage = () => {
    let ar = [];
    for (let i = 1; i < Math.ceil(total / 4) + 1; i = i + 1) {
      ar.push(i);
    }
    return ar;
  };

  return (
    <div className="pagination">
      <div className="wrap">
        {page > 1 && (
          <i
            className="fas fa-chevron-left"
            onClick={() => handleClickPage(page - 1)}
          />
        )}
        {Math.ceil(total / 4) < 6 &&
          renderPage().map((el: number) => (
            <div
              key={el}
              className="pagination__number"
              onClick={() => handleClickPage(el)}
            >
              {el === page ? (
                <p className="pagination_numberActual">{el}</p>
              ) : (
                el
              )}
            </div>
          ))}
        {Math.ceil(total / 4) >= 6 && (
          <>
            <div
              className="pagination__number"
              onClick={() => handleClickPage(1)}
            >
              <div className={page === 1 ? "pagination_numberActual" : ""}>
                1
              </div>
            </div>
            {page > 3 && <div>...</div>}
            {page > 2 && (
              <div
                className="pagination__number"
                onClick={() => handleClickPage(page - 1)}
              >
                {page - 1}
              </div>
            )}
            {page !== 1 &&
              (page !== Math.ceil(total / 4) && (
                <div className="pagination__number pagination_numberActual">
                  {page}
                </div>
              ))}
            {page < Math.ceil(total / 4) - 1 && (
              <div
                className="pagination__number"
                onClick={() => handleClickPage(page + 1)}
              >
                {page + 1}
              </div>
            )}
            {page < Math.ceil(total / 4) - 2 && <div>...</div>}
            <div
              className="pagination__number"
              onClick={() => handleClickPage(Math.ceil(total / 4))}
            >
              <div
                className={
                  page === Math.ceil(total / 4) ? "pagination_numberActual" : ""
                }
              >
                {Math.ceil(total / 4)}
              </div>
            </div>
          </>
        )}

        {page < Math.ceil(total / 4) && (
          <i
            className="fas fa-chevron-right"
            onClick={() => handleClickPage(page + 1)}
          />
        )}
      </div>
    </div>
  );
});

export default Pagination;
