import { useState } from "react";

export default function SlotTasksonAdd({onAdd}) {
	const [taskName, setTaskName] = useState('');
	function handleSubmit(ev){
		ev.preventDefault();
		onAdd(taskName);
		setTaskName(' ')

	}
	return (
		<form onSubmit={handleSubmit}>
			<button>+</button>
			<input type="text" value={taskName} onChange={ev => setTaskName(ev.target.value)} placeholder="NEW TASK..." />
		</form>
	);
}