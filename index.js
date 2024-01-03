// // Add your code here


const submitData = (name, email) => {
    const formData = { 
        name: name, 
        email: email
    }
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(
            formData
        ),
    }
    return fetch("http://localhost:3000/users", configurationObject)
    .then((resp) => resp.json())
    .then((data) => document.body.textContent = data.id)
    .catch((error) => document.body.textContent = error.message)
}

// const submitData = (name, email) => {
//     return fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//       body: JSON.stringify({
//         name: name,
//         email: email
//       }),
//     })
    // .then((resp) => resp.json())
    // .then((json) => submitData(json));
// }