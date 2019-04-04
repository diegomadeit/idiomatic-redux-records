import React from "react";
import Button from "./Button";
import { shallow } from "enzyme";

describe("Button", () => {
  let wrapper, mockCallBack;

  beforeEach(() => {
    mockCallBack = jest.fn();
    wrapper = shallow(<Button onClick={mockCallBack}>Click</Button>);
  });

  it("should trigger onClick", () => {
    const button = wrapper.find("button");
    button.simulate("click");
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
