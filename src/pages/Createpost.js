import React, { UseState } from "react";

export default function createPost() {
    const [title, setTitle] = UseState("");
    const [summary, setSummary] = UseState("");
    const [content, setContent] = UseState("");

    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);

        ev.preventDefault();

        const response = await fetch('http://localhost:4000/Post', {
            method: 'POST',
            body: data,
        });

        response.json();
        if (response.ok) {
            setRedirect(true);
        }
    }

    return (
        <form onSubmit={createNewPost}>
            <input
                type="title"
                placeholder="title"
                onChange={ev => setTitle(ev.target.title)}
            />

            <input
                type="summary"
                placeholder="summary"
                value={summary}
                onChange={ev => setSummary(ev.target.summary)}
            />
        </form>
    );
}


  <input type= 'files'

   value={'files'}
  onChange={ev=>setFiles(ev.target.files)}/>




  <button onclick="myFunction()">UpdatePost</button>
  </form>

);
}
}


 

