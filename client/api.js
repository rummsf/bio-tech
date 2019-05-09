const host_and_port = 'http://localhost:8191';

export default async function fetchReactorData() {
  const response = await fetch(`${host_and_port}/fetch_data`, {
    method: 'POST',
    body: JSON.stringify({
      timestamp: Date.now(),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    return response.statusText;
  }

  const json = await response.json();
  return json;
}
