import React from 'react';
import CountUp from 'react-countup';

const Info = () => {
    return (
        <div className='grid grid-cols-2 gap-5 md:grid-cols-4 my-10 justify-around p-5 md:p-16 text-center bg-red-500 text-white'>
            <div>
                <div className='text-5xl font-extrabold'>
                    {/* <CountUp start={0} end={3750} duration={10}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp> */}
                    <span>3750</span>
                </div>
                <h4 className='text-xl fond-semibold'>BOOKS TO READ</h4>
            </div>
            <div>
                <div className='text-5xl font-extrabold'>
                    {/* <CountUp start={0} end={569} duration={10}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp> */}
                    <span>569</span>
                </div>
                <h4 className='text-xl fond-semibold'>ONLINE USERS</h4>
            </div>
            <div>
                <div className='text-5xl font-extrabold'>
                    {/* <CountUp start={0} end={768} duration={10}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp> */}
                    <span>768</span>
                </div>
                <h4 className='text-xl fond-semibold'>BEST AUTHORS</h4>
            </div>
            <div>
                <div className='text-5xl font-extrabold'>
                    {/* <CountUp start={0} end={50} duration={10}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp> */}
                    <span>50</span>
                </div>
                <h4 className='text-xl fond-semibold'>AWARDS</h4>
            </div>
        </div>
    );
};

export default Info;