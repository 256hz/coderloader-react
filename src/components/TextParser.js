import React from 'react'

export default function TextParser(text){
    const parsed = text.split(' ').map( (word, i) => {
        if (word.includes('http://')) {
            return <a href={word} target='_blank' rel='noopener noreferrer' key={'a'+i}>{word.slice(7) + ' '}</a>
        } else if (word.includes('https://')) {
            return <a href={word} target='_blank' rel='noopener noreferrer' key={'a'+i}>{word.slice(8) + ' '}</a>
        // } else if (word.includes('\n')) {
        //     return word.replace(/(\n)+/g, '<br />')
        } else {
            return word + ' '
        }
    })
    return parsed
    }