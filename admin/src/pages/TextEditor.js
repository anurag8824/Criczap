import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const TextEditor = () => {
    const [content, setContent] = useState('');
    const [metaTags, setMetaTags] = useState('');
    const [postDate, setPostDate] = useState(new Date().toISOString().split('T')[0]);

    const handleContentChange = (value) => {
        setContent(value);
    };

    const handleImageUpload = async () => {
        // Logic to upload the image and get the URL
        // Example using a file input and axios
        const formData = new FormData();
        formData.append('file', /* your file object here */);
        try {
            const response = await axios.post('/upload/image-endpoint', formData);
            const imageUrl = response.data.url;
            return imageUrl; // Return the uploaded image URL
        } catch (error) {
            console.error('Image upload failed', error);
            return null;
        }
    };

    const modules = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'header': [1, 2, 3, false] }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['link', 'image'],
                [{ 'align': [] }],
                ['clean']
            ],
            handlers: {
                image: () => {
                    handleImageUpload().then((imageUrl) => {
                        if (imageUrl) {
                            const quill = this.quill;
                            const range = quill.getSelection();
                            quill.insertEmbed(range.index, 'image', imageUrl);
                        }
                    });
                }
            }
        }
    };

    return (
        <div className="text-editor">
            <p>Create New Post</p>
            {/* <input
                type="text"
                placeholder="Enter Meta Tags (comma-separated)"
                value={metaTags}
                onChange={(e) => setMetaTags(e.target.value)}
            /> */}


            {/* <input
                type="date"
                value={postDate}
                onChange={(e) => setPostDate(e.target.value)}
            /> */}

            <p className='text-lg'>Add Post Headline</p>

            <ReactQuill
                value={content}
                // onChange={handleContentChange}
                modules={modules}
                formats={["bold", "italic", "underline", "strike", "header", "list", "link", "image", "align"]}
                placeholder="Write post headline"
            />


            
<p className='text-lg'>Add Post Text</p>

<ReactQuill
    value={content}
    // onChange={handleContentChange}
    modules={modules}
    formats={["bold", "italic", "underline", "strike", "header", "list", "link", "image", "align"]}
    placeholder="Write post headline"
/>


            <button onClick={() => console.log({ content, metaTags, postDate })}>Save Post</button>
        </div>
    );
};

export default TextEditor;
