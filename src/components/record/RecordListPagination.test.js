import React from "react";
import RecordListPagination from "./RecordListPagination";
import { shallow } from "enzyme";

describe("RecordListPagination", () => {
  let wrapper, props;

  it("should show no pagination", () => {
    props = { pagination: { page: 1, pages: 1 }, collectionPath: "/records" };
    wrapper = shallow(<RecordListPagination {...props} />);
    expect(wrapper.find("div").children().length).toBe(0);
  });

  it("should show next button", () => {
    props = { pagination: { page: 1, pages: 2 }, collectionPath: "/records" };
    wrapper = shallow(<RecordListPagination {...props} />);
    expect(wrapper.find("div").children().length).toBe(1);
    expect(wrapper.find("span").text()).toBe("Next");
  });

  it("should show previous button", () => {
    props = { pagination: { page: 2, pages: 2 }, collectionPath: "/records" };
    wrapper = shallow(<RecordListPagination {...props} />);
    expect(wrapper.find("div").children().length).toBe(1);
    expect(wrapper.find("span").text()).toBe("Previous");
  });

  it("should show next and previous button", () => {
    props = { pagination: { page: 2, pages: 3 }, collectionPath: "/records" };
    wrapper = shallow(<RecordListPagination {...props} />);
    expect(wrapper.find("div").children().length).toBe(2);
  });
});
