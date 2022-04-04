import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import styles from './styles.scss';

import App from './app/app';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render( <StrictMode> <App /> </StrictMode>);
