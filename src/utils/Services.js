export const FetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            return res.json();
        })

}