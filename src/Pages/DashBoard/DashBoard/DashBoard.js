import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/AuthProvider';
import useSeler from '../../../Hooks/UseSeler';
import useVerified from '../../../Hooks/UseVerified';

const DashBoard = () => {
    const { user } = useContext(authContext);
    const [isSeler] = useSeler(user?.email);
    const [isVerified] = useVerified(user?.email);

    const handelVarifySeler = person => {

        const VarifyUser = {
            name: person.displayName,
            email: person.email,
            varify: false
        }

        fetch(`https://b612-used-products-resale-server-side-green.vercel.app/verifyselerreq`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('Access_Token')}`
            },
            body: JSON.stringify(VarifyUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Request sent!');
                }
            })
    }


    return (
        <div>
            {
                isSeler && <div className='border max-w-md mt-10 p-5 bg-red-50 rounded-xl shadow-xl'>
                    <h2 className='m-5 text-xl'>Send Seller varification request</h2>
                    <button onClick={() => handelVarifySeler(user)} className='btn mx-5 btn-outline btn-error' disabled={isVerified}>Send Request</button>
                </div>
            }
        </div>
    );
};

export default DashBoard;