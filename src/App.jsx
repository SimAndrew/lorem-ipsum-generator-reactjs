import { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import data from './data.js';

const App = () => {
	const dataWithIds = useMemo(() => {
		return data.map((item) => ({ id: nanoid(), content: item }));
	}, []);

	const [count, setCount] = useState(1);
	const [text, setText] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let amount = parseInt(count);
		setText(dataWithIds.slice(0, amount));
	};

	useEffect(() => {
		if (text.length > 0) {
			const currentIds = text.map((item) => item.id);
			console.log('Current IDs in text:', currentIds);
		}
	}, [text]);

	return (
		<section className="section-center">
			<h4>tired of boring lorem ipsum?</h4>
			<form onSubmit={handleSubmit} className="lorem-form">
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

				<button type="submit" className="btn">
					Generate
				</button>
			</form>

			<article className="lorem-text">
				{text.map((item) => {
					return <p key={item.id}>{item.content}</p>;
				})}
			</article>
		</section>
	);
};

export default App;
