import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { PokemonCard } from "..";

describe("PokemonCard", () => {
  it("should render without breaking", () => {
    const wrapper = shallow(<PokemonCard />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
