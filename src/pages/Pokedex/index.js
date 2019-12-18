/* eslint-disable no-nested-ternary */

import React, { Component } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Link } from 'react-router-dom';

import api from '../../services/myPokedexApi';

import { PokemonList, Container, LoadButton } from './styles';
import icon from '../../assets/logo.png';

import Loading from '../../components/Loading';

export default class MyPokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      loading: false,
      currentPage: 0,
      totalPages: 0,
    };
  }

  componentDidMount() {
    this.loadPokemons();
  }

  loadMorePokemons = page => {
    this.loadPokemons(page);
  };

  loadPokemons = async (page = 1) => {
    const { pokemons } = this.state;

    this.setState({ loading: true });
    const response = await api.get('/pokemons', {
      params: {
        page,
      },
    });

    const pokemonsData = response.data.data.map(data => {
      const { pokemon } = data;
      const date = parseISO(pokemon.capture_date);
      const formattedDate = format(
        date,
        "'Dia' dd 'de' MMMM' de 'yyyy', às' H:mm'h'",
        {
          locale: pt,
        }
      );

      return {
        ...pokemon,
        capture_date: formattedDate,
      };
    });

    this.setState({
      pokemons: [...pokemons, ...pokemonsData],
      loading: false,
      currentPage: response.data.currentPage,
      totalPages: response.data.totalPages,
    });
  };

  render() {
    const { pokemons, loading, currentPage, totalPages } = this.state;

    return (
      <Container>
        {loading ? (
          <Container>
            <Loading />
          </Container>
        ) : (
          <></>
        )}
        {pokemons.length > 0 ? (
          <PokemonList>
            {pokemons.map(pokemon => {
              return (
                <li key={pokemon.id}>
                  <img src={pokemon.image} alt="pokemon" />
                  <strong>
                    <span>#{pokemon.id}</span> {pokemon.name}
                  </strong>
                  <strong>
                    Data da Captura: <span>{pokemon.capture_date}</span>
                  </strong>

                  <Link to={`/my-pokedex/${pokemon.id}`}>
                    <div>
                      <img src={icon} alt="capturar" />
                    </div>
                    <span>Ver Detalhes</span>
                  </Link>
                </li>
              );
            })}
          </PokemonList>
        ) : !loading ? (
          <div>
            <h3>Você ainda não possui pokémons</h3>
          </div>
        ) : null}

        {currentPage < totalPages ? (
          <LoadButton
            type="button"
            onClick={() => this.loadMorePokemons(currentPage + 1)}
          >
            Carregar mais Pokémons
          </LoadButton>
        ) : (
          <></>
        )}
      </Container>
    );
  }
}
