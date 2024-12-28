import Greeting from "./Greeting";
function App() {
  let name='jyothi';
  return (
    <div>
    <h1>Hello From React JS</h1>
    <Greeting name = {name}/>
    <Greeting name = {'Tarun'}/>
    <Greeting name = {'Pooja'}/>
    <Greeting name = {'Taruni'}/>
    </div>
  );
}
export default App;
