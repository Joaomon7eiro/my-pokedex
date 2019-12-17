import React, { Component } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/myPokedexApi';

import { PokemonList, Container } from './styles';
import icon from '../../assets/logo.png';

export default class MyPokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.loadPokemons();
  }

  loadMorePokemons = () => {
    this.loadPokemons();
  };

  loadPokemons = async () => {
    this.setState({ loading: true });
    const response = await api.get('/pokemons');

    const pokemonsData = response.data.data.map(pokemon => {
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
    this.setState({ pokemons: pokemonsData, loading: false });
  };

  render() {
    const { pokemons, loading } = this.state;

    if (loading) {
      return (
        <div>
          <FaSpinner size={24} color="#222" />
        </div>
      );
    }
    return (
      <Container>
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
      </Container>
    );
  }
}