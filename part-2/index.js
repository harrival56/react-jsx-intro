const App = () => {
    const nameList = [
        {username:'harri', Name:'Harrison', date:'01/02/2022',msg:'Having fun on a sunny day!'},
        {username:'nd04', Name:'Ndubuisi', date:'01/03/2022',msg:'Only time will tell'},
        {username:'val2', Name:'Valentine', date:'01/05/2022',msg:"Can't wait to land a job"},
        {username:'kamso', Name:'Chikamso', date:'01/07/2022',msg:'React is fun'}
    ]
    return (
        <div>
            <Tweet users={nameList} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))