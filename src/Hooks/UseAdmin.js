import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loadingAdmin, setIsLoadingAdmin] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:4000/users/admin?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                    setIsLoadingAdmin(false);
                })
        }
    }, [email])
    return [isAdmin, loadingAdmin]
}

export default useAdmin;