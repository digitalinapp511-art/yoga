import mongoose from 'mongoose';
import dns from 'node:dns';

// Ensure SRV records for mongodb+srv resolve reliably across all networks
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch {
  // ignore if dns server setting is unsupported
}

export async function connectDB() {
  const uri =
    process.env.MONGODB_URI ||
    'mongodb+srv://digitalinapp511_db_user:Anmol1234@cluster0.yus4kav.mongodb.net/vimoksha?appName=Cluster0';

  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected successfully to Vimoksha database');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
  }
}
