/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class ReviewSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  updateTerm(e, termIn = null) {
    const { filterBySearch } = this.props;
    e.preventDefault();
    if (termIn) {
      filterBySearch(termIn);
    } else {
      filterBySearch(e.target.value);
      this.setState({ term: e.target.value });
    }
  }

  render() {
    const { term } = this.state;
    return (
      <form className='reviewSearchContainer' onSubmit={(e) => this.updateTerm(e, term)}>
        <label htmlFor='reviewSearchInput'>Search: </label>
        <input
          id='reviewSearchInput'
          type='text'
          autoComplete='off'
          onChange={(e) => this.updateTerm(e)}
        />
        <button type='submit' className='fa fa-search reviewSearchIcon' />
      </form>
    );
  }
}

export default ReviewSearch;
