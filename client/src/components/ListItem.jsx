import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ item }) {
  return <li>{item.description}</li>;
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ListItem;
