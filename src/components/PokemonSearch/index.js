import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";

const { Search } = Input;

function PokemonSearch(props) {
  const { onSearch } = props;
  return (
    <Search
      placeholder="Search Pokemon"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );
}

PokemonSearch.propTypes = {
  onSearch: PropTypes.func
};

PokemonSearch.defaultProps = {
  onSearch: () => {}
};

export default PokemonSearch;
