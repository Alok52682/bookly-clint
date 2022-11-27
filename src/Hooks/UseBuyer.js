import { useEffect, useState } from 'react';

const UseBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [loadingBuyer, setIsLoadingBuyer] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://b612-used-products-resale-server-side-green.vercel.app/users/Buyer?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isBuyer);
                    setIsLoadingBuyer(false);
                })
        }
    }, [email])
    return [isBuyer, loadingBuyer]
};

export default UseBuyer;