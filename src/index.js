import { createRoot } from 'react-dom/client';
import './style.css';
import Comments from './pages/Comments';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Comments />);
