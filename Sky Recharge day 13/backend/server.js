const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes'); // adjust path if your server.js is at project root
// If server.js is inside src/, then: const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

