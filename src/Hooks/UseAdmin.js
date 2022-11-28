import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    // if the user refresh the page then show the loader thats why set this start loading state
    const [loadingAdmin, setIsLoadingAdmin] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://b612-used-products-resale-server-side-green.vercel.app/users/admin?email=${email}`)
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