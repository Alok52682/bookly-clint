import { useEffect, useState } from "react"

const useSeler = email => {
    const [isSeler, setIsSeler] = useState(false);
    const [loadingSeler, setIsLoadingSeler] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:4000/users/seler?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeler(data.isSeler);
                    setIsLoadingSeler(false);
                })
        }
    }, [email])
    return [isSeler, loadingSeler]
}

export default useSeler;