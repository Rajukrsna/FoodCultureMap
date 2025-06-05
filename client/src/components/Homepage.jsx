import React, { useState } from 'react';
import { TextField, Button, Container, Typography, List, ListItem } from '@mui/material';
import axios from 'axios';

import useEmbeddings from './hooks/useEmbeddings'; 
function HomePage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [answer, setAnswer] = useState('');
  const embedQuery = useEmbeddings();

  const handleSearch = async () => {
    const embedding = await embedQuery(query);

    const response = await axios.post('http://localhost:5000/api/rag/ask', {
      queryEmbedding: embedding,
      originalQuery: query
    });

    setResults(response.data.similar || []);
    setAnswer(response.data.answer);
  };

  return (
    <Container>
      <Typography variant="h4">Food & Culture Explorer 🌍</Typography>
      <TextField fullWidth value={query} onChange={(e) => setQuery(e.target.value)} label="Ask anything..." />
      <Button variant="contained" onClick={handleSearch}>Search</Button>

      <Typography variant="h6" sx={{ mt: 3 }}>AI Answer:</Typography>
      <Typography>{answer}</Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Related Dishes:</Typography>
      <List>
        {results.map((r, i) => <ListItem key={i}>{r.name}</ListItem>)}
      </List>
    </Container>
  );
}

export default HomePage;
