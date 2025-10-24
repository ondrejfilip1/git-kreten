import { useState, useEffect } from 'react'





export default function index() {
    const [cookies, setCookies] = useState(0)
    const increaseCookies = () => {
        setCookies(cookies+1);
    }

    useEffect(() => {
        document.title = cookies+"";
    }, [cookies])

    return (
        <>
            <p>cookies: {cookies} </p>
            <button onClick={increaseCookies}>Click</button>
        </>
    )
}
