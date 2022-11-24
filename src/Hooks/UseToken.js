import { useEffect, useState } from "react";

const UseToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:4000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('Access_Token', data.accessToken);
                        setToken(data.accessToken);
                    }
                })
        }
    }, [email]);

    return [token];
}

export default UseToken;