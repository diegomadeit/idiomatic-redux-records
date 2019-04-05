import React from "react";
import Record from "./Record";
import { shallow } from "enzyme";

describe("Record", () => {
  let wrapper, release;

  beforeEach(() => {
    release = {
      images: [{ uri: "https://via.placeholder.com/150" }],
      title: "Super record",
      tracklist: [{ position: "1", title: "Super song" }]
    };
    wrapper = shallow(<Record release={release} />);
  });

  it("should show release images or default", () => {
    expect(wrapper.find("div.record__covers img").length).toBe(1);
    release = { images: [] };
    wrapper.setProps({ release });
    expect(wrapper.find("div.record__covers > p").text()).toBe(
      "No images found"
    );
  });

  it("should show release tracklist or default", () => {
    expect(wrapper.find(".record__song").text()).toBe("1 Super song");
    release = { tracklist: [] };
    wrapper.setProps({ release });
    expect(wrapper.find(".record__song").text()).toBe("No songs found");
  });
});
