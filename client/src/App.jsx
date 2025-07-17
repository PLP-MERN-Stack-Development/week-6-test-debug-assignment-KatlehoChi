import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './components/Button';
import useFetch from './Hooks/useFetch';



function App() {
  const [bugs, setBugs] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios.get('/api/bugs').then(res => setBugs(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/bugs', { title });
    setBugs([...bugs, res.data]);
    setTitle('');
  };

  return (
    <div>
      <h1>Bug Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Bug title" />
        <Button type="submit">Report Bug</Button>
      </form>
      <ul>
        {bugs.map(bug => <li key={bug._id}>{bug.title}</li>)}
      </ul>
    </div>
  );
}

export default App;