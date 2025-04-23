// src/Greeting.tsx
interface GreetingProps {
  name: string;
  age: number;
  hobby: string;
}

function Greeting({ name, age, hobby }: GreetingProps) {
  return (
    <div>
      <p>안녕하세요, {name}님!</p>
      <p>{age}살이시군요.</p>
      <p>취미는 {hobby} 입니다.</p>
    </div>
  );
}

export default Greeting;
