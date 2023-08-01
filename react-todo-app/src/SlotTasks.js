import { useState } from "react";
export default function SlotTasks() {
	const [taskName, setTaskName] = useState('');
	return (
		<form>
			<button>+</button>
			<input type="text" value={taskName} onChange={ev => setTaskName(ev.target.value)} placeholder="NEW TASK..." />
		</form>
	);
}