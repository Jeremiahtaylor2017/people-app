import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Index({ people, createPeople }) {
	const [newForm, setNewForm] = useState({
		name: "",
		title: "",
		image: ""
	});

	const [formValid, setFormValid] = useState(false);

	const loaded = () => {
		return people.map(({ name, _id }) => {
			return (
				<div className="person" key={_id}>
					<Link to={`/people/${_id}`}>
						<h1>{name}</h1>
					</Link>
				</div>
			);
		});
	};

	const loading = () => {
		return <h1>Loading ...</h1>;
	};

	const isFormValid = () => {
		return newForm.name.length > 2 && newForm.title.length > 2;
	};

	const handleChange = (e) => {
		setNewForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formValid) return;
		createPeople(newForm);
	};

	const isFormValidRef = useRef(null);

	useEffect(() => {
		isFormValidRef.current = isFormValid;
	});

	useEffect(() => {
		setFormValid(isFormValidRef.current());
	}, [newForm]);

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={newForm.name}
					onChange={handleChange}
					name="name"
					placeholder="Grace Hopper"
				/>
				<br />
				<input
					type="text"
					value={newForm.title}
					onChange={handleChange}
					name="title"
					placeholder="Software Engineer"
				/>
				<br />
				<input
					type="text"
					value={newForm.image}
					onChange={handleChange}
					name="image"
					placeholder="https://your-image-url.png"
				/>
				<br />
				<input disabled={!isFormValid()} type="submit" value="Add person" />
			</form>
			{people ? loaded() : loading()}
		</section>
	);
}

export default Index;
