import React, { Component } from 'react';
import * as styles from './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    const { onSubmit } = this.props;
    const { term } = this.state;
    event.preventDefault();
    this.setState({ term: '' });
    onSubmit(term);
  }

  render() {
    const {
      onSubmit,
      value,
      placeHolder,
      type = 'text',
    } = this.props;
    const { term } = this.state;

    return (
      <form
        className={styles.SearchWrapper}
        onSubmit={this.handleSubmit}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          className={styles.searchIcon}
        >
          <path d="M135 271q28 28 68 28t68-28q28-28 28-68t-28-68q-28-28-68-28t-68 28q-28 28-28 68t28 68zm196 28l106 106-32 32-106-106v-17l-6-6q-38 33-90 33-58 0-98.5-40T64 203q0-58 40.5-98.5T203 64q58 0 98 40.5t40 98.5q0 52-33 90l6 6h17z" />
        </svg>
        <input
          value={value}
          type={type}
          onChange={this.handleChange}
          placeholder={placeHolder}
          className={styles.Search}
        />
      </form>
    );
  }
}

export default Search;
