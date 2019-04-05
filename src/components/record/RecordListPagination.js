import React from "react";
import PropTypes from "prop-types";
import styles from "./RecordListPagination.module.css";
import HoverLink from "../../components/common/HoverLink";

const RecordListPagination = ({ pagination, collectionPath }) => (
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

RecordListPagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  collectionPath: PropTypes.string.isRequired
};

export default RecordListPagination;
