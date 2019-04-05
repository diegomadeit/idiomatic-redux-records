import React from "react";
import RecordList from "./RecordList";
import { shallow } from "enzyme";

describe("RecordList", () => {
  it("should show release thumbnails or default", () => {
    let releases = [{ id: 1, basic_information: {} }];
    let wrapper = shallow(<RecordList releases={releases} />);
    expect(wrapper.find(".records").length).toBe(1);
    releases = [];
    wrapper.setProps({ releases });
    expect(wrapper.find("p").text()).toBe("Empty collection.");
  });
});
