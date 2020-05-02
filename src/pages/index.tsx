import { useState, useEffect } from "react";

function IndexPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetch_todos = async () => {
      const request = await fetch("/api/todos");
      const data = await request.json();

      setTodos(data);
    };

    fetch_todos();
  }, []);

  return (
    <div>
      {todos.map((el) => (
        <p>
          id: {el.id}, done: {el.done ? "true" : "false"}, text: {el.text}
        </p>
      ))}
    </div>
  );
}

export default IndexPage;
