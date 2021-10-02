import React, { useState, useEffect } from "react";
import { Row, Col, Pagination, List, Select } from "antd";
import { PokemonHeader, PokemonCard, PokemonSearch } from "../../components";

const { Option } = Select;
function PokemonPage() {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState("");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sortByAttribute, setSortByAttribute] = useState("name");
  const [sortByOrder, setSortByOrder] = useState("asc");
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const offSetValue = page === -1 ? 0 : page * pageSize;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offSetValue}`;
    const urlData = [];
    const fetchData = async () => {
      try {
        const pokemonList = await fetch(url);
        const json = await pokemonList.json();
        setTotalCount(json.count);
        /* eslint-disable no-await-in-loop */
        for (let i = 0; i < json.results.length; i++) {
          const response = await fetch(json.results[i].url);
          const json1 = await response.json();
          urlData.push({
            name:
              json.results[i].name.charAt(0).toUpperCase() +
              json.results[i].name.slice(1),
            height: json1.height,
            weight: json1.weight,
            abilities: json1.abilities
              .map(value => value.ability.name)
              .toString(),
            image: json1.sprites.other["official-artwork"].front_default
          });
        }
        setData(urlData);
      } catch (error) {
        // console.log("error", error);
      }
    };

    fetchData();
    setIsSearched(false);
  }, [page, pageSize, isSearched]);

  const onSearch = value => {
    if (value === "") {
      setIsSearched(true);
    } else {
      const searchedPokemonData = data.filter(
        el =>
          el.name.toLowerCase().includes(value.toLowerCase()) ||
          el.abilities.toLowerCase().includes(value.toLowerCase())
      );
      setData(searchedPokemonData);
    }
  };

  const handleSortByAttribute = value => {
    if (value === "name") {
      data.sort((a, b) =>
        sortByOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    }
    if (value === "height") {
      data.sort((a, b) =>
        sortByOrder === "asc" ? a.height - b.height : b.height - a.height
      );
    }

    if (value === "weight") {
      data.sort((a, b) =>
        sortByOrder === "asc" ? a.weight - b.weight : b.weight - a.weight
      );
    }
    setSortByAttribute(value);
  };

  const handleSortByOrder = value => {
    if (sortByAttribute === "height") {
      data.sort((a, b) =>
        value === "asc" ? a.height - b.height : b.height - a.height
      );
    }

    if (sortByAttribute === "weight") {
      data.sort((a, b) =>
        value === "asc" ? a.weight - b.weight : b.weight - a.weight
      );
    }
    setSortByOrder(value);
  };

  return (
    <div>
      <PokemonHeader />
      <Row>
        <Col span={12}>
          <Pagination
            defaultPageSize={20}
            total={totalCount}
            onChange={(paginationPage, paginationPageSize) => {
              setPage(paginationPage - 1);
              setPageSize(paginationPageSize);
            }}
          />
        </Col>
        <Col span={6}>
          <PokemonSearch onSearch={onSearch} />
        </Col>
        <Col span={1}>{null}</Col>
        <Col span={5}>
          Sort Pokemon By
          <Select
            defaultValue={sortByAttribute}
            style={{ width: 80 }}
            onChange={handleSortByAttribute}
          >
            <Option value="name">Name</Option>
            <Option value="height">Height</Option>
            <Option value="weight">Weight</Option>
          </Select>
          <Select
            defaultValue={sortByOrder}
            style={{ width: 60 }}
            onChange={handleSortByOrder}
          >
            <Option value="asc">Asc</Option>
            <Option value="desc">Desc</Option>
          </Select>
        </Col>
      </Row>
      <hr />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 5,
          xxl: 3
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <PokemonCard
              pokemonName={item.name}
              pokemonImage={item.image}
              pokemonHeight={item.height}
              pokemonWeight={item.weight}
              pokemonAbilties={item.abilities}
            />
          </List.Item>
        )}
      />
      <div>
        <Pagination
          defaultPageSize={20}
          total={totalCount}
          onChange={(paginationPage, paginationPageSize) => {
            setPage(paginationPage - 1);
            setPageSize(paginationPageSize);
          }}
        />
      </div>
      <br />
    </div>
  );
}

export default PokemonPage;
