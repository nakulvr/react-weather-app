import React, { Component } from "react";
import "./App.css";
import getBooks from "./services/BookService";
import Book from "./components/Book";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books : getBooks()
    }
  }
  render() {
    return(<table>
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Title
          </th>
          <th>
            Author
          </th>
        </tr>
      </thead>
      <tbody>
      {this.state.books.map((book, key) => <Book book={book} key={key}/>)}
      </tbody>
    </table>)
  }
}

export default App;
