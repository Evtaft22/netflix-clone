import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';

function List({ items }) {
  return (
    <div>
      <h4>List Component</h4>
      There are {items.length} items.
      <ul>
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default List;
