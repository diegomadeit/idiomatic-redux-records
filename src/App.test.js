import React from "react";
import App from "./App";
import Header from "./components/header/Header";
import { shallow } from "enzyme";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should have Header", () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it("should have a main section", () => {
    expect(wrapper.find("section").length).toBe(1);
  });
});
