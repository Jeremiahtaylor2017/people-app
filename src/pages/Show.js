import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Show({ people, deletePeople, updatePeople }) {
	const [updateForm, setUpdateForm] = useState({
		name: "",
		title: "",
		image: ""
	});

	const navigate = useNavigate();

	const { id } = useParams();
	const person = people ? people.find((p) => p._id === id) : null;

	const handleDelete = (e) => {
		deletePeople(id);
		navigate("/");
	};

	const handleChange = (e) => {
		setUpdateForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		updatePeople(id, updateForm);
	};

	useEffect(() => {
		if (person) {
			setUpdateForm(person);
		}
	}, [person]);

	const loading = () => {
		return <h1>Loading ...</h1>;
	};

	const loaded = () => {
		return (
			<>
				<h1>{person.name}</h1>
				<h2>{person.title}</h2>
				<img className="person-image" src={person.image} alt={person.name} />
				<button onClick={handleDelete}>Delete This person</button>
			</>
		);
	};

	return (
		<div className="person">
			{person ? loaded() : loading()}
			<form onSubmit={handleUpdate}>
				<input
					type="text"
					value={updateForm.name}
					name="name"
					onChange={handleChange}
					placeholder="Dan Abramov ..."
				/>
				<input
					type="text"
					value={updateForm.title}
					name="title"
					onChange={handleChange}
					placeholder="Software Engineer"
				/>
				<input
					type="text"
					value={updateForm.image}
					name="image"
					onChange={handleChange}
					placeholder="https://some-image.png"
				/>
				<input type="submit" value="Update Person" />
			</form>
		</div>
	);
}

export default Show;
