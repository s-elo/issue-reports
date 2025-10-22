import { lazy, Suspense } from 'react';

import './App.css';
// import Provider from './components/ProviderComponent';

const Provider = lazy(() => delayForDemo(import('./components/ProviderComponent')));

const App = () => {
  return (
    <div className="content">
      <Suspense fallback="Loading...">
        <Provider />
      </Suspense>
    </div>
  );
};

async function delayForDemo(promise: Promise<any>) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}


export default App;
