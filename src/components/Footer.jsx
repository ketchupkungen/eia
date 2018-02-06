import React, { Component } from 'react';
import styles from '../css/Footer.scss';

class Footer extends Component {
	render() {
		return(
			<footer className={styles.footer}>
		      <div className="container">
		        <span className="text-muted">Copyright@2018 EIA</span>
		      </div>
		    </footer>
		);
	}
}

export default Footer;