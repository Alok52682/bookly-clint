import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckOut = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const { price, username, email, _id } = order;
    const [success, setSuccess] = useState('');
    const [transId, setTransId] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetch("https://b612-used-products-resale-server-side-green.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('Access_Token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('')
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: username,
                        email
                    },
                },
            },
        );
        if (confirmationError) {
            setCardError(confirmationError.message);
            return;
        }
        // console.log(paymentIntent);
        if (paymentIntent.status === "succeeded") {
            const payment = {
                transId: paymentIntent.id,
                email,
                price,
                orderId: _id
            }
            console.log(paymentIntent);
            fetch('https://b612-used-products-resale-server-side-green.vercel.app/transaction', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('Access_Token')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Your payment has been completed');
                        setTransId(paymentIntent.id);
                        toast.success('Payment Successfull!');
                    }
                })
        }
        setProcessing(false);
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className='text-xs text-error mt-3'>{cardError}</p>
            {
                success && <p>TransId : {transId}</p>
            }
            <button type="submit" className='btn bg-red-500 border-none hover:bg-slate-900 w-full rounded-xl mt-5' disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
    );
};

export default CheckOut;