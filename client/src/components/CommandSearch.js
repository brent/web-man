import React from 'react';
import '../css/CommandSearch.css';

const CommandSearch = (props) => (
  <div className="searchForm--wrapper">
    <form className="searchForm" onSubmit={ props.onSubmit }>
      <label className="searchForm__label" htmlFor="searchTerm">man</label>

      <div class="searchForm--inner">
        <input className="searchForm__input" type="text" name="searchTerm" id="searchTerm" placeholder="man" value={ props.searchTerm } onChange={ props.onChange } />
        <button className="searchForm__cta" type="submit">return</button>
      </div>
    </form>
  </div>
);

export default CommandSearch;
