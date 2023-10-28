import "./App.css";

function App() {
  return (
    <>
      <button
        onClick={() => {
          fetch("http://localhost:8000/")
            .then((response) => response.json())
            .then((payload) => {
              console.log(payload);
            });
        }}
      ></button>
    </>
  );
}

export default App;
