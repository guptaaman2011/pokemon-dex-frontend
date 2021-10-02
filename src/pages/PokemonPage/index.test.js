import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { PokemonPage } from "..";

describe("PokemonPage", () => {
  it("should render without breaking", () => {
    const wrapper = shallow(<PokemonPage />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
