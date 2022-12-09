const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.json({
		success: true,
		message: "App is Running Perfectly",
	});
});

app.listen(4000, () => {
	console.log("server is running successfully");
});
