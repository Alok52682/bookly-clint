import { useEffect, useState } from 'react';

const UseBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [loadingBuyer, setIsLoadingBuyer] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:4000/users/Buyer?email=${email}`)
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