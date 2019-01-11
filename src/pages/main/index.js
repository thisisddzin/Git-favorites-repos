import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoritesActions from '../../store/actions/favorites';

class Main extends Component {
    static propTypes = {
      removeFavorite: PropTypes.func.isRequired,
      addFavorite: PropTypes.func.isRequired,
      favorites: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      })).isRequired,
    }

    state = {
      inputRepository: '',
    }

    handleAddRepository = (e) => {
      e.preventDefault();
      this.props.addFavorite();
    }

    handleDelRepository = (id) => {
      this.props.removeFavorite(id);
    }

    render() {
      return (
        <Fragment>
          <form onSubmit={this.handleAddRepository}>
            <input
              type="text"
              placeholder="usuario/repositorio"
              value={this.state.inputRepository}
              onChange={(e) => { this.setState({ inputRepository: e.target.value }); }}
            />
            <button type="submit">Adicionar</button>
          </form>
          <h1>{this.state.inputRepository}</h1>
          <ul>
            {this.props.favorites.map(favorite => (
              <li key={favorite.id}>
                <p>
                  <strong>{favorite.name}</strong>
                  {' '}
(
                  {favorite.description}
)
                </p>
                <a href={favorite.url} target="_blank" rel="noopener noreferrer">Acessar</a>
                <button onClick={() => this.handleDelRepository(favorite.id)}>Deletar</button>
              </li>
            ))}
          </ul>

        </Fragment>
      );
    }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
