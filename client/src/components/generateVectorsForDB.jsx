import { useState, useEffect } from 'react';
import axios from 'axios';
import useEmbeddings from './hooks/useEmbeddings'; // Your embedding hook

export default function GenerateVectorDB() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const embedQuery = useEmbeddings();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/getFoodDetails');
        setData(response.data);
      } catch (err) {
        console.error('Error fetching food data:', err);
      }
    };
    fetchData();
  }, []);

  const generateEmbeddings = async () => {
    setLoading(true);
    const batchSize = 5;
    let updatedDocs = [];

    const processBatch = async (startIndex) => {
      const batch = data.slice(startIndex, startIndex + batchSize);
      for (let item of batch) {
        const vector = await embedQuery(item.description);
        updatedDocs.push({
          dish: item.dish,
          description: item.description,
          embedding: vector,
        });
      }

      if (startIndex + batchSize < data.length) {
        // Process next batch after delay to prevent freezing
        setTimeout(() => processBatch(startIndex + batchSize), 100);
      } else {
        // All done, send to backend
        try {
          const response = await axios.post('/api/insertDatatoDB', updatedDocs);
          if (response.status === 200) {
            alert('Data inserted successfully into MongoDB');
          } else {
            alert('Insertion failed');
          }
        } catch (error) {
          console.error('Error inserting data:', error);
        }
        setLoading(false);
      }
    };

    processBatch(0); // Start the batching process
  };

  return (
    <div>
      <h2>Generate Embeddings</h2>
      <button onClick={generateEmbeddings} disabled={loading}>
        {loading ? 'Processing...' : 'Generate and Insert'}
      </button>
    </div>
  );
}
