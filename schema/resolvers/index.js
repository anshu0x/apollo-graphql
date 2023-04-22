// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const author = {
  id: 1,
  name: "anshu",
};
import { books } from "../../fake.js";
export const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args, contextValue, info) => {
      return books.find((book) => book.id == args.id);
    },
  },
  //  name should be same as the type of query
  Book: {
    author: () => author,
  },
  Mutation: {
    createBook(_, { book }) {
      let new_book = {
        id: books.length + 1,
        ...book,
      };
      books.push(new_book);
      return new_book;
    },
  },
};
