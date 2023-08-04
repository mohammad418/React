import  ReactDOM  from "react-dom/client";

function App(){
    return <h1>Hello React</h1>
}

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(<App/>)