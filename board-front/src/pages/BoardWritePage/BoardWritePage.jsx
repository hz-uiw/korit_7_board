/**@jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import * as s from './style';
import Quill from 'quill';
import "quill/dist/quill.snow.css";

function BoardWritePage(props) {
    const [quill, setQuill] = useState(null);
    const [quillContent, setQuillContent] = useState("");

    const containerRef = useRef();
    useEffect(() => {
        const toolbarOptions = [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }, 'bold', 'italic', 'underline', 'strike'],        // toggled buttons
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'align': [] }, { 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            ['blockquote', 'code-block'],
            ['link', 'image', 'video', 'formula'],
        ];
        const quill = new Quill(containerRef.current, {
            modules: {
                toolbar: toolbarOptions,
            },
            theme: "snow",
            
        });

        quill.on('text-change', () => {
            setQuillContent(quill.root.innerHTML);
        });

    }, []);

    return (
        <div ref={containerRef}>
            
        </div>
    );
}

export default BoardWritePage;