import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Image,
  Details,
  TypesList,
  MovesList,
  Button,
  ContainerDetails,
  Card,
  CardMove,
} from './styles';

import api from '../../services/myPokedexApi';

export default class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      pokemon: {},
      moves: [],
      types: [],
    };
  }

  async componentDidMount() {
    this.loadPokemon();
  }

  loadPokemon = async () => {
    const { id } = this.props.match.params;

    this.setState({ loading: true });

    const response = await api.get(`/pokemons/${id}/`);

    const { pokemon } = response.data;

    pokemon.capture_date = this.formatDate(pokemon.capture_date);

    const { moves } = response.data;

    const { types } = response.data;

    this.setState({
      pokemon,
      loading: false,
      moves,
      types,
    });
  };

  formatDate = captureDate => {
    const date = parseISO(captureDate);
    const formattedDate = format(
      date,
      "'Dia' dd 'de' MMMM' de 'yyyy', às' H:mm'h'",
      {
        locale: pt,
      }
    );

    return formattedDate;
  };

  render() {
    const { pokemon, loading, types, moves } = this.state;

    if (loading) {
      return <FaSpinner />;
    }
    return (
      <>
        <Container>
          <Image>
            <img src={pokemon.image} alt="pokemon" />
          </Image>

          <Details>
            <h1>
              {pokemon.name} <span>#{pokemon.id}</span>
            </h1>
            <ContainerDetails>
              <Card>
                <h2>Informações</h2>

                <div>
                  <h3>
                    Altura:
                    <span>{pokemon.height / 10}m</span>
                  </h3>
                  <h3>
                    Peso:
                    <span>{pokemon.weight / 10} kg</span>
                  </h3>
                </div>
              </Card>

              <Card>
                <h2>Tipo</h2>
                <TypesList>
                  {types.map(({ type }) => {
                    return (
                      <li key={type.name}>
                        <span>{type.name}</span>
                      </li>
                    );
                  })}
                </TypesList>
              </Card>
            </ContainerDetails>

            <Button>Data de Captura: {pokemon.capture_date}</Button>
          </Details>
        </Container>
        <CardMove>
          <h2>Ataques</h2>
          <MovesList>
            {moves.map(({ move }) => {
              return (
                <li key={move.name}>
                  <span>{move.name}</span>
                </li>
              );
            })}
          </MovesList>
        </CardMove>
      </>
    );
  }
}