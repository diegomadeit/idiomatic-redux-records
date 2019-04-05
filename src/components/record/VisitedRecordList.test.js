import React from "react";
import VisitedRecordList from "./VisitedRecordList";
import { shallow } from "enzyme";

describe("VisitedRecordList", () => {
  it("should show visited releases or default", () => {
    let visitedReleases = [{ id: 1 }];
    let wrapper = shallow(
      <VisitedRecordList visitedReleases={visitedReleases} />
    );
    expect(wrapper.find(".records").length).toBe(1);
    visitedReleases = [];
    wrapper.setProps({ visitedReleases });
    expect(wrapper.find("p").length).toBe(1);
  });
});
