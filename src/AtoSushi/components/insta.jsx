import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export function Insta({ className = '' }) {
    return (
        <Link
            to={{ pathname: 'https://www.instagram.com/ato_sushi_lodz/' }}
            target="_blank"
        >
            <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                className={className}
            />
        </Link>
    )
}

export function Facebook({ className = '' }) {
    return (
        <Link
            to={{ pathname: 'https://www.facebook.com/AtoSushi' }}
            target="_blank"
        >
            <FontAwesomeIcon
                icon={faFacebook}
                color="white"
                className={className}
            />
        </Link>
    )
}
