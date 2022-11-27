import { useEffect, useState } from "react"

const useVerified = email => {
    const [isVerified, setIsVerified] = useState(false);
    const [loadingVerified, setIsLoadingVerified] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://b612-used-products-resale-server-side-green.vercel.app/users/varifyed?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsVerified(data.isVerified);
                    setIsLoadingVerified(false);
                })
        }
    }, [email])
    return [isVerified, loadingVerified]
}

export default useVerified;