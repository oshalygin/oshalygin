/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch(fetch, { baseUrl, cookie }) {
  const defaults = {
    method: 'GET',
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      ...(cookie ? { Cookie: cookie } : null),
    },
  };

  return (url, options) =>
    url.startsWith('/api')
      ? fetch(`${baseUrl}${url}`, {
          ...defaults,
          ...options,
          headers: {
            ...defaults.headers,
            ...(options && options.headers),
          },
        })
      : fetch(url, options);
}

export default createFetch;
