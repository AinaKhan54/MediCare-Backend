import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import userRoutes from './routes/admin/user.route';
import roleRoutes from './routes/admin/role.route';
import dotenv from 'dotenv';
import appointmentRoutes from './routes/admin/appointment.route';
import doctorRoutes from './routes/admin/doctor.route';
import messageRoutes from './routes/admin/message.route';
import patientRoutes from './routes/admin/patients.route'; 

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Connect to Database
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/patients', patientRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
