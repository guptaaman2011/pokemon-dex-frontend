import React from "react";
import { Card } from "antd";
import PropTypes from "prop-types";

const { Meta } = Card;

function PokemonCard(props) {
  const {
    pokemonName,
    pokemonImage,
    pokemonAbilties,
    pokemonHeight,
    pokemonWeight
  } = props;
  return (
    <Card hoverable cover={<img alt="example" src={pokemonImage} />}>
      <Meta title={pokemonName} />
      <Meta title={`Height: ${pokemonHeight} Weight: ${pokemonWeight}`} />
      <Meta title={`Abilities: ${pokemonAbilties}`} />
    </Card>
  );
}

PokemonCard.propTypes = {
  pokemonName: PropTypes.string,
  pokemonImage: PropTypes.string,
  pokemonAbilties: PropTypes.string,
  pokemonHeight: PropTypes.number,
  pokemonWeight: PropTypes.number
};

PokemonCard.defaultProps = {
  pokemonName: "",
  pokemonImage: "",
  pokemonAbilties: "",
  pokemonHeight: 0,
  pokemonWeight: 0
};
export default PokemonCard;
