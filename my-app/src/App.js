import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./components/AddUser";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import BorrowBook from "./components/BorrowBook";
import ReturnBook from "./components/ReturnBook";
import UserHistory from "./components/UserHistory";

function App() {
  return (
    <main className="container p-4">
      <AddUser />
      <AddBook />
      <BookList />
      <BorrowBook />
      <ReturnBook />
      <UserHistory />
    </main>
  );
}

export default App;
