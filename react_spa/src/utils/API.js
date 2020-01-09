import axios from "axios";

const ajax = axios.create({
    headers: {
      'Content-type': 'application/json'
    }
  });

  export default{
    searchBooks: function(query) {
        return ajax.get('/api/google', { params: { q: query } });
      },
      saveBook: function(bookData) {
        return ajax.post('/api/books', bookData);
      }
  };