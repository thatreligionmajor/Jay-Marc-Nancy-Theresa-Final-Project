const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			login: async (email, password) => {

				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							email: email,
							password: password
						}
					)
				}
				//edit the url to match your backend url
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/login", options)
					if (response.status !== 200) {
						alert("Error!  Response Code: ", response.status)
						return false;
					}
					const data = await response.json()
					console.log("from backend", data)
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token })
					return true;
				}
				catch (error) {
					console.log("login error!")
				}
			},

			logout: async () => {
				sessionStorage.removeItem("token");
				console.log("You are logged out");
				setStore({ token: null });
			},

			syncSessionToken: () => {
				const token = sessionStorage.getItem("token");
				if (token && token !== "" && token !== undefined) {
					setStore({ token: token })
				}
			},

			getMessage: async () => {
				const store = getStore();
				const options = {
					headers: {
						"Authorization": "Bearer " + store.token
					},
				}
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "api/hello", options)
					const data = await resp.json()
					setStore({ message: data.message })

					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getUserAdded: async (email, password) => {
				const store = getStore();
				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json",
						// 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' + store.token
					},
					body: JSON.stringify(
						{
							email: email,
							password: password,
						}
					)
				}
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/signup", options)
					if (response.status !== 200) {
						alert("Error!  Response Code: this sucks! ", response.status)
						return false;
					}
					const data = await response.json()
					console.log("from backend", data)
					// setStore({ message: data.msg });
					// sessionStorage.getItem("token", token);
					// setStore({ token: token })
					return true;
				}
				catch (error) {
					console.log("login error!")
				}
			},


		}
	};
};

export default getState;
