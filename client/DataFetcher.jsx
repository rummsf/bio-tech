import Button from '@material-ui/core/Button';
import Refresh from '@material-ui/icons/Refresh';
import React, { useState, useEffect, useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';

import fetchReactorData from './api';
import GraphView from './GraphView';

function DataFetcher(props) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reactorData, setReactorData] = useState({});

  const fetchData = useCallback(
    () => {
      if (loading) {
        return;
      }

      if (!props.selectedReactors.size) {
        if (Object.keys(reactorData)) {
          setReactorData({});
        }
        return;
      }

      (async () => {
        setLoading(true);
        try {
          const newReactorData = await fetchReactorData();
          setReactorData(newReactorData);
          setErrorMessage(null);
        } catch (e) {
          setErrorMessage(e.message);
        }
        setLoading(false);
      })();
    },
    [loading, reactorData, props.selectedReactors],
  );

  useEffect(
    () => {
      fetchData();
    },
    [props.selectedReactors],
  );

  const { classes } = props;
  return (
    <>
      <div>
        <Button variant="outlined" onClick={fetchData}>
          <Refresh />
        </Button>
      </div>
      <GraphView data={reactorData} selectedReactors={props.selectedReactors} />
      {errorMessage !== null && (
        <div className={classes.error}>
          Error when fetching: {errorMessage}
          <br />
          <em>(Is the server running?)</em>
        </div>
      )}
    </>
  );
}

const styles = {
  error: {
    border: '1px #c33 solid',
    borderRadius: '4px',
    color: '#c33',
    margin: '12px auto',
    padding: '12px',
    textAlign: 'center',
    width: '500px',
  },
};

export default withStyles(styles)(DataFetcher);
