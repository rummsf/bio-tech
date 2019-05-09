import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ReactorDataViewer from './ReactorDataViewer';

import logo from './logo-2x.png';

function App(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.shell}>
        <div className={classes.headSection}>
          <div>
            <img
              alt="Some weird spore thing"
              src={logo}
              className={classes.logo}
            />
          </div>
          <div>
            <Typography variant="headline" className={classes.mainHeader}>
              Bio Reactor Data Viewer
            </Typography>
          </div>
        </div>
      </div>
      <div className={[classes.main, classes.shell].join(' ')}>
        <ReactorDataViewer />
      </div>
    </>
  );
}

const styles = {
  shell: {
    margin: '0 auto',
    maxWidth: '1024px',
    width: '100%',
  },

  headSection: {
    padding: '100px 0 12px 0',
  },

  mainHeader: {
    color: '#fff',
  },

  logo: {
    maxWidth: '200px',
  },

  main: {
    background: '#f2f2f2',
    borderRadius: '4px',
    padding: '12px',
    marginBottom: '50px',
  },
};

export default withStyles(styles)(App);
