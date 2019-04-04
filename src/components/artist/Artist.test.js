import React from "react";
import Artist from "./Artist";
import { shallow } from "enzyme";

describe("Artist", () => {
  let wrapper, artist;

  beforeEach(() => {
    artist = { name: "Pink Floyd", profile: "The best band ever!" };
    wrapper = shallow(<Artist artist={artist} />);
  });

  it("should show artist header", () => {
    expect(wrapper.find("h1").text()).toBe("About Pink Floyd");
  });

  it("should show artist profile or default", () => {
    expect(wrapper.find("p").text()).toBe("The best band ever!");
    artist = { name: "Pink Floyd", profile: "" };
    wrapper.setProps({ artist });
    expect(wrapper.find("p").text()).toBe("No data about the artist.");
  });
});
