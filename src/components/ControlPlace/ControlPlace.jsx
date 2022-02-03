import React from 'react';
import classes from './ControlPlace.module.css';
import { MdAddLink } from 'react-icons/md';
import { OPEN_FORM } from '../../utils/constants';

const SORT_PROP = [
  { value: 'any', label: 'Any' },
  { value: 'name', label: 'Sort by name' },
  { value: 'age', label: 'Sort by age' },
];

export const ControlPlace = ({ filter, setFilter, addUserDlg }) => {
  return (
    <div className={classes.control}>
      <select
        value={filter.typeSort}
        onChange={(e) => setFilter({ ...filter, typeSort: e.target.value })}
      >
        {SORT_PROP.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <input
        type="search"
        value={filter.line}
        onChange={(e) => setFilter({ ...filter, line: e.target.value })}
      />
      <MdAddLink
        size="2rem"
        className={classes['add-user']}
        onClick={() => addUserDlg(OPEN_FORM)}
      />
    </div>
  );
};
