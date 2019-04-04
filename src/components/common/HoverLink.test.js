import React from "react";
import HoverLink from "./HoverLink";
import { shallow } from "enzyme";

describe("HoverLink", () => {
  let wrapper;

  beforeEach(() => {
    const props = { to: "", className: "", hoverClass: "" };
    wrapper = shallow(<HoverLink {...props}>Link</HoverLink>);
  });

  it("should initial state be false", () => {
    expect(wrapper.state().hovering).toBe(false);
  });

  it("should change state when hovering", () => {
    const div = wrapper.find("div");
    div.simulate("mouseover");
    expect(wrapper.state().hovering).toBe(true);
    div.simulate("mouseout");
    expect(wrapper.state().hovering).toBe(false);
  });
});
