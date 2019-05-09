import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import React, { useState, useCallback } from 'react';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import { withStyles } from '@material-ui/core/styles';

import Colors from './Colors';
import DataFetcher from './DataFetcher';

const REACTOR_COUNT = 12;

function ReactorDataViewer(props) {
  const [selectedReactors, setSelectedReactors] = useState(new Set([1]));

  const toggleAll = useCallback(
    () => {
      const newSelectedReactors = new Set();
      // If not all of the reactors are selected, select them all.
      // Otherwise, flip them all off.
      if (selectedReactors.size < REACTOR_COUNT) {
        for (let i = 1; i <= REACTOR_COUNT; i += 1) {
          newSelectedReactors.add(i);
        }
      }
      setSelectedReactors(newSelectedReactors);
    },
    [selectedReactors],
  );

  const onToggleReactor = useCallback(
    idx => {
      const newSelectedReactors = new Set(selectedReactors.values());
      if (!newSelectedReactors.has(idx)) {
        newSelectedReactors.add(idx);
      } else {
        newSelectedReactors.delete(idx);
      }
      setSelectedReactors(newSelectedReactors);
    },
    [selectedReactors],
  );

  const { classes } = props;

  const items = [];
  for (let i = 1; i <= REACTOR_COUNT; i += 1) {
    const isSelected = selectedReactors.has(i);
    items.push(
      <MenuItem
        key={'reactor-' + i}
        onClick={() => {
          onToggleReactor(i);
        }}
      >
        <ListItemIcon>
          {isSelected ? <ToggleOnIcon /> : <ToggleOffIcon />}
        </ListItemIcon>
        <ListItemText primary={`Reactor ${i}`} />
        {selectedReactors.has(i) && (
          <div style={{ backgroundColor: Colors['reactor-' + i] }}>&nbsp;</div>
        )}
      </MenuItem>,
    );
  }

  let icon;
  if (selectedReactors.size < REACTOR_COUNT) {
    icon = <ToggleOnIcon />;
  } else {
    icon = <ToggleOffIcon />;
  }

  const toggleButton = (
    <MenuItem onClick={toggleAll}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary="Toggle all" />
    </MenuItem>
  );

  return (
    <div className={classes.main}>
      <div>
        <MenuList>
          {toggleButton}
          <Divider />
          {items}
        </MenuList>
      </div>
      <div>
        <div>
          <DataFetcher selectedReactors={selectedReactors} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    border: '1px #f00 solid',
  },
};

export default withStyles(styles)(ReactorDataViewer);
