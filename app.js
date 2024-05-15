require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const router = require("./router/auth-router");
const connectdb = require("./utils/db");
const contactroute = require("./router/contact-router");
const faculty_route = require("./router/service-router");
const admin = require("./router/admin-router");
const user = require("./router/prefer-router");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.resolve(__dirname, "client", "dist")));

// API routes
app.use("/api/", router);
app.use("/api/", contactroute);
app.use("/api/", faculty_route);
app.use("/api/admin/", admin);
app.use("/api/user/", user);

// Catch-all route to serve index.html for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

const port = process.env.PORT || 5000;
connectdb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at port number: ${port}`);
  });
});
