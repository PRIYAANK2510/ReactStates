const Updating = () => {
	return (
		<>
			<h1>Updating</h1>
			<p>
				This is the third phase through which our component passes. After the mounting
				phase where the component has been created, the update phase comes into the scene.
				This is where component's state changes and hence, re-rendering takes place. In
				this phase, the data of the component (state & props) updates in response to user
				events like clicking, typing and so on. This results in the re-rendering of the
				component.
			</p>
		</>
	);
};
export default Updating;
