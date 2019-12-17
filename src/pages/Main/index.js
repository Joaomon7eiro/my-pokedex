/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { MdClose, MdSearch } from 'react-icons/md';

import { pokeApi, imageBaseUrl } from '../../services/pokeApi';

import {
  PokemonList,
  LoadButton,
  Container,
  SearchContainer,
  SubmitButton,
  Form,
  LoadingContainer,
} from './styles';
import icon from '../../assets/logo.png';

import Loading from '../../components/Loading';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      loading: false,
      pokemonSearch: '',
      searchLoading: false,
      lastSearch: '',
      showSearch: false,
    };
  }

  componentDidMount() {
    this.loadPokemons();
  }

  loadMorePokemons = () => {
    this.loadPokemons();
  };

  loadPokemons = async () => {
    const { pokemons } = this.state;

    this.setState({ loading: true });
    const response = await pokeApi.get('/pokemon', {
      params: {
        limit: 24,
        offset: pokemons.length,
      },
    });

    const pokemonsData = response.data.results.map(pokemon => {
      const [, pokemonPathId] = pokemon.url.split('pokemon/');

      const [pokemonId] = pokemonPathId.split('/');

      return {
        ...pokemon,
        id: pokemonId,
        image: `${imageBaseUrl}/${pokemonId}.png`,
      };
    });
    this.setState({ pokemons: [...pokemons, ...pokemonsData], loading: false });
  };

  handleInputChange = async e => {
    this.setState({ pokemonSearch: e.target.value });
  };

  handleDeleteSearch = async () => {
    await this.setState({ pokemons: [] });
    await this.loadPokemons();

    this.setState({
      lastSearch: '',
      showSearch: false,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { pokemonSearch } = this.state;

    if (pokemonSearch.length === 0) return;

    this.setState({ searchLoading: true });

    let response;
    try {
      response = await pokeApi.get(`/pokemon/${pokemonSearch}`);
    } catch (error) {
      this.setState({
        loading: false,
        showSearch: true,
        searchLoading: false,
        pokemonSearch: '',
        lastSearch: pokemonSearch,
      });
      return;
    }

    const pokemon = response.data;

    const pokemons = [
      {
        ...pokemon,
        image: pokemon.sprites.front_default,
      },
    ];

    this.setState({
      pokemons,
      loading: false,
      showSearch: true,
      pokemonSearch: '',
      searchLoading: false,
      lastSearch: pokemonSearch,
    });
  };

  render() {
    const {
      pokemons,
      loading,
      showSearch,
      lastSearch,
      pokemonSearch,
      searchLoading,
    } = this.state;

    return (
      <Container>
        <SearchContainer>
          {showSearch ? (
            <div>
              <button type="button" onClick={this.handleDeleteSearch}>
                <MdClose color="#fff" />
              </button>
              Busca: {lastSearch}
            </div>
          ) : (
            <div />
          )}
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Buscar Pokemon"
              value={pokemonSearch}
              onChange={this.handleInputChange}
            />

            <SubmitButton loading={searchLoading}>
              {searchLoading ? (
                <Loading />
              ) : (
                <MdSearch color="#fff" size={16} />
              )}
            </SubmitButton>
          </Form>
        </SearchContainer>

        <PokemonList>
          {pokemons.map(pokemon => {
            return (
              <li key={pokemon.id}>
                <img src={pokemon.image} alt="pokemon" />
                <strong>
                  <span>#{pokemon.id}</span> {pokemon.name}
                </strong>

                <Link to={`/pokemon/${pokemon.id}`}>
                  <div>
                    <img src={icon} alt="capturar" />
                  </div>
                  <span>Capturar</span>
                </Link>
              </li>
            );
          })}
        </PokemonList>
        {loading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : !showSearch ? (
          <LoadButton type="button" onClick={this.loadPokemons}>
            Carregar mais Pokémons
          </LoadButton>
        ) : (
          <></>
        )}
      </Container>
    );
  }
}
