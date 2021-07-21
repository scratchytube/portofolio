import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Wrapper>
            <div className="split-right">
                <h1>Contact me</h1>
                <p>talk to me</p>
            </div>
            <div className="split-left">
                <div className="name-email">
                    <input type="text" name="name" />
                    <input type="email" name='email' />
                </div>
                <div className="message">
                    <input type="text" name='message' />
                </div>
            </div>
        </Wrapper>
    )
}

export default Contact
const Wrapper = styled.section`

`
