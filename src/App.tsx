function App() {
  return (
    <>
      <button
        style={{ width: "50px", height: "30px" }}
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
