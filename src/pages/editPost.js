import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "../Editor";

export default function EditPost() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [files, setFiles] = useState("");
    const { id } = useParams();
    const [cover, setCover] = useState("");

    useEffect(() => {
        fetch(`http://localhost:4000/Post/${id}`)
            .then((response) => response.json())
            .then((postInfo) => {
                setTitle(postInfo.title);
                setContent(postInfo.content);
                setSummary(postInfo.summary);
            });
    }, []);

    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        if (files?.[0]) {
            data.set("file", files?.[0]);
        }

        const response = await fetch(`http://localhost:4000/Post/${id}`, {
            method: "PUT",
            body: data,
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }, { indent: -1 }],
            ["link", "image"],
            ["clean"],
        ],
    };

    if (redirect) {
        return <Navigate to={`/post/${id}`} />;
    }

    return (
        <form onSubmit={updatePost}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
            />

            <input
                type="text"
                placeholder="Summary"
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)}
            />

            <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
            <Editor onChange={setContent} value={content} />

            <ReactQuill
                value={content}
                theme="snow"
                onChange={(newValue) => setContent(newValue)}
                modules={modules}
            />
            <button style={{ marginTop: "5px" }}>Update Post</button>
        </form>
    );
}
