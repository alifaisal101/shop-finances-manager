export const postRequest = async (body, url, token) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  // Add Authorization header if token is provided
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${window.config.API_URL}${url}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    // Handle specific HTTP error status codes
    if (res.status === 404) {
      throw new Error('API endpoint not found');
    } else if (res.status === 500) {
      throw new Error('Internal server error');
    } else if (res.status === 400) {
      throw new Error('Bad Request');
    } else {
      throw new Error('Network response was not ok');
    }
  }

  return await res.json();
};

export const getRequest = async (url) => {
  const res = await fetch(`${window.config.API_URL}${url}`, {
    method: 'GET',
  });

  if (!res.ok) {
    // Handle specific HTTP error status codes
    if (res.status === 404) {
      throw new Error('API endpoint not found');
    } else if (res.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw new Error('Network response was not ok');
    }
  }

  return await res.json();
};
