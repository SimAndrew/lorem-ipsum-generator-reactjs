import { useState } from 'react';
import data from './data.js';

const App = () => {
	const [count, setCount] = useState(1);
	const [text, setText] = useState([]);

	return (
		<section className="section-center">
			<h4>tired of boring lorem ipsunm?</h4>
			<form className="lorem-form">
				<label htmlFor="amount">paragraphs:</label>
				<input
					type="number"
					name="amount"
					id="amount"
					min="1"
					step="1"
					max="8"
					value={count}
					onChange={(e) => setCount(e.target.value)}
				/>
			</form>
			<button type="submit" className="btn">
				Generate
			</button>
		</section>
	);
};

export default App;
