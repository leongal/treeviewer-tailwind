import logo from './logo.svg';
import './App.css';
import Tree from './components/tree/tree';

function App() {
  const data = {
    id: 'root',
    name: 'Parent',
    children: [
      {
        id: '1',
        name: 'Child - 1',
      },
      {
        id: '3',
        name: 'Child - 3',
        children: [
          {
            id: '4',
            name: 'Child - 4',
          },
        ],
      },
    ],
  };
  return (
    <div className="App">
      <Tree jsonData={data}/>
    </div>
  );
}

export default App;
