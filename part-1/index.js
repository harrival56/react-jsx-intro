const App = () => {
    return (
    <div>
        <FirstComponent />
        <NamedComponent name="Harrison"/>
    </div>)
}

ReactDOM.render(<App />, document.getElementById("root"))