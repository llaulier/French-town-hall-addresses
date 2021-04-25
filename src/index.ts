import app from './app';
import { PORT } from './config';

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT}`);
  console.log(`API Docs available on http://localhost:${PORT}/api/docs`);
});