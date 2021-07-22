import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Wrapper>

            <div className="main-container">
                <h3>Talk to me</h3>
                <form className='contact-form'>
                    <label>Name</label>
                    <input className='input-field' type="text" name='name'/>

                    <label>Email</label>
                    <input className='input-field' type="text" name='subject' />

                    <label>Message</label>
                    <textarea className='input-field' name="message"></textarea>

                    <input className='submit-btn' type="submit" value='Send it' />
                </form>
            </div>
        </Wrapper>
    )
}

export default Contact
const Wrapper = styled.section`
color: #fafafa;

h3 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.contact-form {
    display: block;
    max-width: 600px;
    margin: 0 auto;
    // border: 1px solid #c1c1c1;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 50px;
}

.contact-form label {
    line-height: 2.7em;
}

.contact-form textarea {
    min-height: 100px;
    font-size: 14px;
}

.input-field {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #c1c1c1;
    font-size: 14px;
}

.submit-btn {
    margin-top: 10px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    background-color: black;
    border: none;
}

`
