var app = new Vue({
	el: "#app",
	data: {
		mailinglist: [],
	},
	created() {
		for (var index = 0; index < 10; index++) {
			axios
				.get("https://flynn.boolean.careers/exercises/api/random/mail")
				.then((result) => {
					// console.log(result.data.response);

					this.address = result.data.response;

					// console.log(this.address);
					this.mailinglist.push(this.address);
					console.log(this.mailinglist.length);
				});
		}
	},
	methods: {
		// showLastname(index) {
		// 	// console.log(index);
		// 	console.log(this.rubrica[index].cognome);
		// },
	},
});
