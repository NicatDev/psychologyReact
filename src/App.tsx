import ProjectRoutes from './routes/index';
import { UserProvider } from '@/context/UserContext';

function App() {
  return (
    <UserProvider>
      <ProjectRoutes />
    </UserProvider>
  );
}

export default App;