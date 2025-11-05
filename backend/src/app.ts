import express from "express";
import cors from "cors";
import indexRoutes from './modules/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// endpoint
app.use('/', indexRoutes);
// app.use('/api/v1/auth', authRoutes);

// Run
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});