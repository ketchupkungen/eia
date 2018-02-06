import React, { Component } from 'react';
//import '../css/About.scss';

// Components
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Footer from '../components/Footer.jsx';

class About extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron title='About us' subtitle="Things about us that you really need to know" />
				<div className="container">
					<h2>About</h2>

					<p>Bacon ipsum dolor amet tongue beef doner alcatra. Venison pancetta jerky, pork chop andouille t-bone bresaola. Fatback shoulder filet mignon kielbasa biltong cow ball tip. Rump tongue leberkas meatball picanha. Sirloin sausage jerky chicken. Fatback ham hock andouille shank boudin ground round. Burgdoggen ribeye kielbasa tongue swine.</p>
					
				</div>
				<Footer />
			</div>
		);
	}
}

export default About;