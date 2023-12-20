import {API_key} from "../HT_26_ajax_weather/gpt_api.js";

const openAIEndpoint = 'https://api.openai.com/v1/chat/completions';

export async function queryOpenAI(prompt) {
	const requestBody = {
		model: "gpt-3.5-turbo",
		messages: [{"role": "user", "content": prompt}],
		temperature: 0.7
	};

	try {
		const response = await fetch(openAIEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${API_key}`
			},
			body: JSON.stringify(requestBody)
		});

		return await response.json();
	} catch (error) {
		console.error('Error querying OpenAI:', error);
		throw error;
	}
}
