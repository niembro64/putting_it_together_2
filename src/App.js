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
                age="30"
                hairColor="Marone"
            />
            <Person
                firstName="Eric"
                lastName="Niemo"
                age="34"
                hairColor="Marone"
            />
            <Person
                firstName="Chicken"
                lastName="Little"
                age="1"
                hairColor="Yellow"
            />
        </>
    );
}

export default App;
