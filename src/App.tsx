import { useEffect, useRef } from "react";
import { MyModal } from "./components/web-components/MyModal";

function App() {
	const modalRef = useRef<MyModal>(null);

	useEffect(() => {
		const modal = modalRef.current;
		if (!modal) return;

		const handleOpen = () => console.log("Modal opened");
		const handleClose = () => console.log("Modal closed");

		modal.addEventListener("modal-open", handleOpen);
		modal.addEventListener("modal-close", handleClose);

		return () => {
			modal.removeEventListener("modal-open", handleOpen);
			modal.removeEventListener("modal-close", handleClose);
		};
	}, []);

	const openModal = () => {
		modalRef.current?.show();
	};

	return (
		<div>
			<h1>Web component modal example</h1>
			<button onClick={openModal}>Open Modal</button>
			<my-modal ref={modalRef}>
				<h1>React + Web component in Typescript</h1>
			</my-modal>
		</div>
	);
}

export default App;
