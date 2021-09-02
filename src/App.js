import logo from './logo.svg';
import './App.css';
import cn from 'classnames'
import View from './containers/View/view';

function App() {
  return (
    <div className={cn("bg-secondary")}>
      <View />
    </div>
  );
}

export default App;
