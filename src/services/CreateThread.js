const CreateThread = (event, forum) => {
//    event.preventDefault()

   const formData = new FormData(event.target)

   let data = []
    for (let entry of formData.values()) {
        data.push(entry)
    }

    console.log(forum)

    const url = 'https://agora-api-maugrim777.herokuapp.com/newThread'
        fetch('http://localhost:3000/newThread' || url, {
            'method': "POST", 
            'body': JSON.stringify({
                    forum: forum,
                    title: data[0],
                    deleteThread: data[1]
            }),
            'headers': {
                "Content-Type": "application/json"
            }
        })
            .then(response =>  response.json())
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
}

export default CreateThread;