import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store} >
      <Header />
      <ImageGrid />
    </Provider>  
  );
}

export default App;
