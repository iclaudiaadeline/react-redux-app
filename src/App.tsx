import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { login, logout } from "./store/actions/authActions";
import type { AppDispatch, RootState } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const [userName, setUserName] = useState("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(userName.trim() || "User"));
    setUserName("");
  };

  return (
    <div>
      <h1>React + Redux + TypeScript</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <p>Please log in.</p>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            placeholder="Your name"
          />
          <button type="submit">Login</button>
        </form>
      )}
      <Counter />
    </div>
  );
}

export default App;