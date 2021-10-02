import React, { useState, useEffect } from "react";
import { Row, Col, Pagination, List } from "antd";
import { PokemonHeader, PokemonCard } from "../../components";

function PokemonPage() {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState("");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);

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
  }, [page, pageSize]);

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
        <Col span={6}>Search Pokemon</Col>
        <Col span={6}>Sort By</Col>
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
