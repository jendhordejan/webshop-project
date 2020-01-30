export default function api(extension) {
  console.log("FETCH: ", `http://localhost:4000${extension}`);
  return fetch(`http://localhost:4000${extension}`)
    .then(response => Promise.all([response.status, response.json()]))
    .then(([status, data]) => {
      if (status >= 400) {
        throw { api_error: data };
      } else {
        return data;
      }
    });
}
