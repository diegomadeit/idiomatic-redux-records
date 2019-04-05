import React from "react";
import RecordSearch from "./RecordSearch";
import { shallow } from "enzyme";

describe("RecordSearch", () => {
  let wrapper, submitMockCallBack, changeMockCallBack;

  beforeEach(() => {
    submitMockCallBack = jest.fn();
    changeMockCallBack = jest.fn();
    const props = {
      searchArtist: "Pink Floyd",
      onSubmit: submitMockCallBack,
      onChange: changeMockCallBack
    };
    wrapper = shallow(<RecordSearch {...props} />);
  });

  it("should trigger onSubmit", () => {
    const form = wrapper.find("form");
    form.simulate("submit");
    expect(submitMockCallBack.mock.calls.length).toBe(1);
  });

  it("should trigger onChange", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Pink Floyd" } });
    expect(changeMockCallBack.mock.calls.length).toBe(1);
  });
});
