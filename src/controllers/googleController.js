const axios = require("axios");
// const db = require("../models");

const ajax = axios.create({
    headers: {
      'Content-type': 'application/json',
    },
  });

module.exports = {

    findAll: async function(req, res) {
        const { query: params } = req;
        try {
          // Ask the Google Books API for all books that match the search
          // term.
          const results = await ajax.get(
            'https://www.googleapis.com/books/v1/volumes' + query + '&key=AIzaSyA99Y86N51qvNSPet8cGKC0BvMzb4UJ3-g'
          );
    
          // Filter the results from the API request to only return books
          // that have our required fields. (*1)
          const apiBooks = results.data.items.filter(
            (result) =>
              result.volumeInfo.title &&
              result.volumeInfo.infoLink &&
              result.volumeInfo.authors &&
              result.volumeInfo.description &&
              result.volumeInfo.imageLinks &&
              result.volumeInfo.imageLinks.thumbnail
          );
    
          // Get all books from the database.
          // const dbBooks = await db.Book.find();
    
          // // Filter the books we will return to just those entries that are
          // // not already in the database.
          // const books = apiBooks.filter((apiBook) =>
          //   dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBook.id)
          // );
    
          // Send the resulting list of books back as JSON.
          return res.json(apiBooks);
        } catch (e) {
          return res.status(422).json(e);
        }
      }
    };