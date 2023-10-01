import data from "../../../../data.json";
// const fs = require("fs");
// const get = require("lodash.get");

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
			],
			events: [],
			hotels: [],
			comics: []
			,
			actions: {
				// Use getActions to call a function within a fuction
				exampleFunction: () => {
					getActions().changeColor(0, "green");
				},
				populateStoreEvents: () => {
					setStore({ events: data.events })
				},
				populateStoreHotels: () => {
					setStore({ hotels: data.hotels })
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

					try {
						const response = await fetch(process.env.BACKEND_URL + "api/token", options)
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
				forgotPassword: async (email) => {
					const options = {
						method: 'POST',
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(
							{
								email: email,
							}
						)
					}
					try {
						const response = await fetch(process.env.BACKEND_URL + "api/forgot-password", options)
						if (response.status !== 200) {
							alert("Error!  Response Code: ", response.status)
							return false;
						}
						const data = await response.json()
						console.log("from backend", data)
						return true;
					}
					catch (error) {
						console.log("login error!")
					}
					//reset the global store
					setStore({ demo: demo });
				},

				getNewComics: () => {
					const options = {
						method: 'GET',
						// headers: {
						// 	"Content-Type": "application/json"
						// },
					}
					fetch("https://api.shortboxed.com/comics/v1/new") //need to edit the link
						.then((resp) => resp.json())
						.then((data) => {
							console.log(data)
							setStore({ comics: data.comics })
						})
					console.log("myString: ", data)

				},

				getEvents: () => {
					fetch("../../../../data.json") //need to edit the link
						.then((resp) => resp.json())
						.then((data) => {
							console.log("myString: ", data)
							setStore({ events: data.events })
						})
					//console log data

				},


			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};


	export default getState;
