/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import typeColors from '../../util/typeColors';

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
  TypeLi,
} from './styles';

import Loading from '../../components/Loading';

import { pokeApi } from '../../services/pokeApi';
import api from '../../services/myPokedexApi';

class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      capLoading: false,
      captured: false,
      pokemon: {},
      moves: [],
      pokemonTypes: [],
      pokemonMoves: [],
      types: [],
    };
  }

  async componentDidMount() {
    await this.loadPokemon();
    this.checkPokemon();
  }

  checkPokemon = async () => {
    const { pokemon } = this.state;

    try {
      await api.get(`pokemons/${pokemon.id}`);
      this.setState({ captured: true });
    } catch (error) {
      this.setState({ captured: false });
    }

    this.setState({ loading: false });
  };

  loadPokemon = async () => {
    const { id } = this.props.match.params;

    this.setState({ loading: true });

    let response;
    try {
      response = await pokeApi.get(`/pokemon/${id}/`);
    } catch (error) {
      this.setState({ loading: false });
      return;
    }

    const pokemon = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.sprites.front_default,
      height: response.data.height,
      weight: response.data.weight,
    };

    const pokemonMoves = response.data.moves.map(move => {
      const [, pathId] = move.move.url.split('move/');

      const [moveId] = pathId.split('/');

      return Number(moveId);
    });

    const pokemonTypes = response.data.types.map(type => {
      const [, pathId] = type.type.url.split('type/');

      const [typeId] = pathId.split('/');

      return Number(typeId);
    });

    const moves = response.data.moves.map(move => {
      const [, pathId] = move.move.url.split('move/');

      const [moveId] = pathId.split('/');

      return {
        id: Number(moveId),
        name: move.move.name,
      };
    });

    const types = response.data.types.map(type => {
      const [, pathId] = type.type.url.split('type/');

      const [typeId] = pathId.split('/');

      return {
        id: Number(typeId),
        name: type.type.name,
      };
    });

    this.setState({
      pokemon,
      moves,
      pokemonTypes,
      pokemonMoves,
      types,
    });
  };

  registerCapture = async () => {
    const { pokemon, moves, pokemonTypes, pokemonMoves } = this.state;

    this.setState({ capLoading: true });

    const pokemonWithDate = {
      ...pokemon,
      capture_date: new Date().toISOString(),
    };
    const data = JSON.parse(localStorage.getItem('persist:myPokedex'));
    const user = JSON.parse(data.user);
    const userId = user.user.id;
    try {
      await Promise.all([
        api.post('/pokemons', pokemonWithDate),
        api.post('/moves', { moves }),
      ]);
      await Promise.all([
        api.post(`/pokemons/${pokemon.id}/moves`, { moves: pokemonMoves }),
        api.post(`/pokemons/${pokemon.id}/types`, { types: pokemonTypes }),
        api.post(`/users/${userId}/pokemons`, {
          pokemonId: pokemon.id,
        }),
      ]);
    } catch (error) {
      this.setState({ capLoading: false, captured: false });
      return;
    }

    this.setState({ capLoading: false, captured: true });
  };

  render() {
    const { pokemon, loading, types, moves, captured, capLoading } = this.state;

    if (loading) {
      return (
        <Container>
          <Loading />
        </Container>
      );
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
                  {types.map(type => {
                    return (
                      <TypeLi color={typeColors(type.id)} key={type.id}>
                        <span>{type.name}</span>
                      </TypeLi>
                    );
                  })}
                </TypesList>
              </Card>
            </ContainerDetails>
            {captured ? (
              <Button disabled>Já obtido</Button>
            ) : capLoading ? (
              <Button>
                <Loading />
              </Button>
            ) : (
              <Button onClick={this.registerCapture}>Registrar Captura</Button>
            )}
          </Details>
        </Container>
        <CardMove>
          <h2>Ataques</h2>
          <MovesList>
            {moves.map(move => {
              return (
                <li key={move.id}>
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

export default Pokemon;
