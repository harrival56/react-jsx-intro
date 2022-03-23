const App = () => {
    
    return (
        <div>
            <Person name="Aira" age={19} hobbies={["music", "dancing","singing"]} />
            <Person name="Falz" age={28} hobbies={["reading", "eating","cooking"]} />
            <Person name="Eliot" age={17} hobbies={["gym","soccer"]} />
            <Person name="Bianca" age={18} hobbies={["gym", "fighting","slapping","kicking"]} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))