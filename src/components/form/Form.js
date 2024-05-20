import React from 'react';
import './Form.css';

function Form() {
    return (
        <div className="container">
            <div className="form-container">

                <form action="#" method="post">
                    <h1>Add Your Card</h1>

                    <label htmlFor="name">Your Name:</label><br />
                    <input type="text" id="name" name="name" placeholder="First and Last Name" required /><br /><br />

                    <label htmlFor="category">Category:</label><br />
                    <select id="category" name="category" required>
                        <option value="" selected >Choose Your Category</option>
                        <option value="1">Programming</option>
                        <option value="2">Visual Arts</option>
                        <option value="3">Digital Marketing</option>
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

                    <label htmlFor="image_url">Add Image:</label><br />
                    <input type="url" id="image_url" name="image_url" placeholder="Add Your Image URL" /><br /><br />

                    <label htmlFor="portfolio_url">Add Your Portfolio:</label><br />
                    <input type="url" id="portfolio_url" name="portfolio_url" placeholder="Add Portfolio URL" /><br /><br />

                    <div class="button-container">
                        <button type="button">Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
