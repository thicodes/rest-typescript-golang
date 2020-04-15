type Fetch = {
  body?: any;
  headers?: any;
  method?: 'POST' | 'GET' | 'DELETE' | 'PUT';
};

export async function fetch(url: string, { body, ...customConfig }: Fetch = {}) {
  const headers = { 'content-type': 'application/json' };
  const config: Fetch = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  return window.fetch(url, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}
