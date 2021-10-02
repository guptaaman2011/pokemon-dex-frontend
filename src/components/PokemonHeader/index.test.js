import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { PokemonHeader } from "..";

describe("PokemonHeader", () => {
  it("should render without breaking", () => {
    const wrapper = shallow(<PokemonHeader />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
