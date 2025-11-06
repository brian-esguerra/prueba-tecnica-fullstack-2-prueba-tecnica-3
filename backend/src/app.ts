import express from "express";
import cors from "cors";
import indexRoutes from './modules/index';
import userRoutes from './modules/user/user.routes';
import authRoutes from './modules/auth/auth.routes';
import courseRoutes from './modules/course/course.routes';
import enrollRoutes from './modules/courseUser/courseUser.routes';

const app = express();
const PORT = process.env.PORT || 3000;

// convertir BigInt a string en JSON
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

app.use(cors());
app.use(express.json());

// Enpoints
app.use('/', indexRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/enroll', enrollRoutes);

// RUN APP
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});