const Tweet = (props) => {
    console.log(props.users)
    return (
        <div>
            <h3>Tweet body</h3>
            {props.users.map(user => {
            return <div>
                <h2>{user.username}'s Tweet.</h2>
                <p>Name: {user.Name}</p>
                <p>Date: {user.date}</p>
                <p>Tweet: {user.msg}</p>
                </div>})}
            </div>
    )
}