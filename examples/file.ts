// random-api.ts
import fetch from 'node-fetch';

interface ApiResponse {
  id: number;
  name: string;
  value: string;
}

async function getRandomData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data: ApiResponse = await response.json();
    console.log('Random API Response:', data);
  } catch (error) {
    console.error('Error fetching API:', error);
  }
}

getRandomData();
