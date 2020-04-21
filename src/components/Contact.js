import React from 'react';
import { useState } from 'react';

function Contact() {
	const [email, setEmail] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [isSent, setIsSent] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isNotSuccess, setIsNotSuccess] = useState(false);
	const [noValue, setNoValue] = useState(0);

	function handleChange(e) {
		setEmail({
			...email,
			[e.target.name]: [e.target.value],
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		const templateId = 'template_5DDR982y';

		if (email.email || email.message || email.name) {
			sendMessage(templateId, { message_html: email.message, from_name: email.name, reply_to: email.email });
			setNoValue(0);
		} else {
			setNoValue(1);
		}
	}

	function sendMessage(templateId, variables) {
		setIsSent(true);

		window.emailjs
			.send('gmail', templateId, variables)
			.then((res) => {
				console.log('Email successfully sent!');
				setTimeout(() => {
					setIsSuccess(true);
				}, 800);
			})
			// Handle errors here however you like, or use a React error boundary
			.catch((err) => {
				console.error('Oh well, you failed. Here some thoughts on the error that occured:', err);
				setTimeout(() => {
					setIsNotSuccess(true);
				}, 800);
			});
	}

	const confirmMessage = () => {
		if (isSent) {
			if (isSuccess) {
				return <p>Message sent! I'll respond within 24 hours.</p>;
			} else if (isNotSuccess) {
				return <p>Problem sending message. Please try again later.</p>;
			} else {
				return <p>Sending message...</p>;
			}
		}

		if (noValue > 0) {
			return <p>Please don't leave fields blank.</p>;
		}
	};

	return (
		<div className="px-10 py-4 m-auto bg-white sm:shadow-lg sm:w-2/3">
			<h1 className="w-full text-3xl font-bold ">Contact</h1>
			<hr className="w-10 my-2 border-t-2 border-red-600" />
			<form className="flex flex-col" method="POST">
				<label className="font-semibold" htmlFor="name">
					Name
				</label>
				<input
					className="p-1 border border-gray-700 rounded"
					type="text"
					name="name"
					value={email.name}
					onChange={handleChange}
				/>

				<label className="font-semibold" htmlFor="email">
					Email
				</label>
				<input
					className="p-1 border border-gray-700 rounded"
					type="email"
					name="email"
					value={email.email}
					onChange={handleChange}
				/>

				<label className="font-semibold" htmlFor="message">
					Message
				</label>
				<textarea
					className="p-1 border border-gray-700 rounded"
					name="message"
					rows="3"
					value={email.message}
					onChange={handleChange}
				></textarea>

				{confirmMessage()}

				<input
					className={`w-32 py-1 mt-3 font-semibold text-white bg-red-700 rounded-full  focus:outline-none  ${
						isSent ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-red-900'
					}`}
					type="submit"
					onClick={handleSubmit}
				/>
			</form>
		</div>
	);
}

export default Contact;
