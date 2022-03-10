// import logo from "./logo.svg";
import "./App.css";
import Person from "./components/Person";

function App() {
    return (
        <>
            <h1>People</h1>
            <Person
                firstName="Roby"
                lastName="Daniele"
                hairColor="Marone"
            />
            <Person
                firstName="Eric"
                lastName="Niemo"
                hairColor="Marone"
            />
            <Person
                firstName="Chicken"
                lastName="Little"
                hairColor="Yellow"
            />
        </>
    );
}

export default App;
