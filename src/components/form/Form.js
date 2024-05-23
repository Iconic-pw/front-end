import React from 'react';
import './Form.css';
import axios from 'axios';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Form() {
    const [fileName, setFileName] = useState('No file chosen');
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();
        const url = 'https://back-end-iwii.onrender.com/addNewCard';
        // const image = new FormData();
        const form = e.target;
        //1. crete the obj that you wanna send
        // const data = {
        //     card_name: form.name.value,
        //     card_category: form.category.value,
        //     card_leve: form.level.value,
        //     job_title: form.job_title.value,
        //     portfolio: form.portfolio_url.value,
        //     profile: form.image.files[0]
        // }
        const formData = new FormData();
        formData.append('card_name', form.name.value);
        formData.append('card_category', form.category.value);
        formData.append('card_level', form.level.value);
        formData.append('job_title', form.job_title.value);
        formData.append('portfolio', form.portfolio_url.value);
        formData.append('profile', form.image.files[0]);

        setIsLoading(true);
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
        
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        setFileName(file ? file.name : 'No file chosen');
    }

    return (
        <div className="container">
            <div className="form-container">

                <form onSubmit={onSubmit} method="post">
                    <h1>Add Your Card</h1>

                    <label htmlFor="name">Your Name:</label><br />
                    <input type="text" id="name" name="name" placeholder="First and Last Name" required /><br /><br />

                    <label htmlFor="category">Category:</label><br />
                    <select id="category" name="category" required>
                        <option value="" selected >Choose Your Category</option>
                        <option value="programming">Programming</option>
                        <option value="visual arts">Visual Arts</option>
                        <option value="digital marketing">Digital Marketing</option>
                    </select><br /><br />

                    <label htmlFor="job_title">Job Title:</label><br />
                    <input type='text' id="job_title" name="job_title" placeholder="Enter Your Jop Title" required /> <br /><br />

                    <label htmlFor="level">Level:</label><br />
                    <select id="level" name="level" required>
                        <option value="" selected >Choose Your Level</option>
                        <option value="entry">Junior</option>
                        <option value="mid">Mid Senior</option>
                        <option value="senior">Senior </option>
                    </select><br /><br />

                    <label htmlFor="portfolio_url">Add Your Portfolio:</label><br />
                    <input type="url" id="portfolio_url" name="portfolio_url" placeholder="Add Portfolio URL" /><br /><br />

                    <label htmlFor="image_url">Add Image:</label><br />
                    {
                        !isLoading && <label className="custom-file-upload">
                            Choose File
                            <input type="file" name="image" id="fileInput" onChange={handleFileChange} style={{ display: 'none' }} required />
                        </label>
                    }
                    {
                        isLoading && <Spinner animation="border" />
                    }
                    <span id="fileName">{fileName}</span>
                    <br /><br />



                    <div class="button-container">
                        <button type="button" id='cancel'>Cancel</button>

                        {
                            !isLoading && <button type="submit" id='form-submit'>Submit</button>
                        }
                        {
                            isLoading && <Spinner animation="border" />
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
