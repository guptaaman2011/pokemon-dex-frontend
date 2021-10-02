import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { PokemonDetailsPage } from "..";

describe("PokemonDetailsPage", () => {
  it("should render without breaking", () => {
    const wrapper = shallow(<PokemonDetailsPage />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
