import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
    margin-bottom: 10px;
    margin-right: 15px;
    font-size: 1.1em;
`

function Poems({ content }) {
    const { projects } = content;
    return (
        <div>
            <h2>Words that inspire me</h2>
            {
                projects.map((project, idx) => (
                    <div key={idx}>
                        <h3>{project.title}</h3>
                        <h4>{project.author}</h4>
                        <p>{ project.lines.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}</p>
                   
                        {
                            project.url &&
                            <StyledLink href={project.url} target="__blank">soundtrack</StyledLink>
                        }
                        
                        <hr />
                    </div>
                ))
            }

        </div>
    )
}

export default Poems
