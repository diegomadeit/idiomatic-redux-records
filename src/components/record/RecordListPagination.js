import React from "react";
import styles from "./RecordListPagination.module.css";
import HoverLink from "../../components/common/HoverLink";

const RecordListPagination = ({ pagination, collectionPath }) => {
  return (
    <div className={styles.pagination}>
      {pagination.page !== 1 && (
        <HoverLink
          to={{
            pathname: `${collectionPath}`,
            search: `?page=${pagination.page - 1}`
          }}
          className="button"
          hoverClass="button--hover"
        >
          <span>Previous</span>
        </HoverLink>
      )}
      {pagination.page !== pagination.pages && (
        <HoverLink
          to={{
            pathname: `${collectionPath}`,
            search: `?page=${pagination.page + 1}`
          }}
          className="button"
          hoverClass="button--hover"
        >
          <span>Next</span>
        </HoverLink>
      )}
    </div>
  );
};
export default RecordListPagination;
