import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Row, Col, Clearfix, Button } from 'react-bootstrap';
import styles from './App.scss';



class App extends Component {
  render() {
    return (
      <Grid className={styles.app}>
        <Row className={"fluid"}>
          <Col xs={12} md={12}>
            <header className={styles.header}>
              <img src={logo} className={styles.logo} alt="logo" />
              <h1 className={styles.title}>Human IT - Excel Import Automation</h1>
            </header>
          </Col>
        </Row>
        <Row className="show-grid">
          <p className={styles.intro}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Row>
      </Grid>
    );
  }
}

export default App;
