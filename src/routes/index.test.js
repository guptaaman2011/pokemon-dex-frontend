import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Routes from ".";

describe("Routes", () => {
  it("should render without breaking", () => {
    const wrapper = shallow(<Routes />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
