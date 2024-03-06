import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "To Kill a Mockingbird", author: "Harper Lee", id: 1 },
    { title: "Don Quixote", author: "Miguel de Cervantes", id: 2 },
    { title: "War and Peace", author: "Leo Tolstoy", id: 3 },
    { title: "Gone with the Wind", author: "Margaret Mitchell", id: 4 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
