import React, { useRef } from "react";
import "./home.css";

const Home = () => {
	const inputRef = useRef(null);
	const iconRef = useRef(null);

	const length = 12;
	const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowerCase = "abcdefghijklmnopqrstuvwxyz";
	const number = "0123456789";
	const symbol = "@#$%^&*()_~|}{[]></-=";

	const allChair = upperCase + lowerCase + number + symbol;
	function generatePassword() {
		let password = "";
		password += upperCase[Math.floor(Math.random() * upperCase.length)];
		password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
		password += number[Math.floor(Math.random() * number.length)];
		password += symbol[Math.floor(Math.random() * symbol.length)];

		while (password.length < length) {
			password += allChair[Math.floor(Math.random() * allChair.length)];
		}
		inputRef.current.value = password;
	}
	const handleCopy = () => {
		navigator.clipboard.writeText(inputRef.current.value).then(() => {
			console.log("copied successfully");
			iconRef.current.classList.add("clicked");
			setTimeout(() => {
				iconRef.current.classList.remove("clicked");
			}, 200); // Loại bỏ lớp sau 200ms
		});
	};
	return (
		<div className="container generate">
			<h1 className="title">
				Generate a <br />
				<span>Random Password</span>
			</h1>
			<div className="generate_input">
				<input
					ref={inputRef}
					type="text"
					className="input"
					placeholder="Password"
                    readOnly
				/>
				<i onClick={handleCopy} ref={iconRef} className="bx bx-copy icon_copy "></i>
			</div>
			<div className="generate_button">
				<i className="bx bx-dice-6"></i>
				<button onClick={generatePassword}>Generate Password</button>
			</div>
		</div>
	);
};

export default Home;
