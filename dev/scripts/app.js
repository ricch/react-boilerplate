import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render () {
		console.log ('looks good');
		return (
			<div>
				Hello
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
