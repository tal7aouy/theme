# random_api.py
import requests

url = "https://api.example.com/data"

try:
    response = requests.get(url)
    response.raise_for_status()
    data = response.json()
    print("Random API Response:", data)
except requests.exceptions.RequestException as e:
    print("Error fetching API:", e)
