import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { PokemonSearch } from "..";

describe("PokemonSearch", () => {
  it("should render without breaking", () => {
    const wrapper = shallow(<PokemonSearch />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
