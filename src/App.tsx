function App() {
  const name: string = "HYO";
  const age: number = 3;
  const hobby: string = "누워자기";

  const handleClick = () => {
    console.log("버튼 클릭됨!");
  };

  return (
    <div>
      <h1>Hello, React + Vite + TypeScript!</h1>
      <p>
        {name}님은 {age}살입니다. 취미는 {hobby} 입니다.
      </p>
      <button onClick={handleClick}>눌러보세요</button>
      {age >= 20 ? <p>성인입니다</p> : <p>미성년자입니다.</p>}
    </div>
  );
}

export default App;
