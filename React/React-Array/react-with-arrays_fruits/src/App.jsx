import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 Banana", color: "yellow" },
    { id: 1, name: "🍊 Orange", color: "orange" },
    { id: 2, name: "🍎 Apple", color: "green" },
    { id: 3, name: "🍓 Strawberries", color: "red" },
    { id: 4, name: "🫐 Blueberries", color: "blue" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} />
      ))}
    </div>
  );
}
