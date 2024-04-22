import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg-light d-flex justify-content-between fw-bold text-black p-3 mt-5" >
                <div>
                    &copy;
                    <span> {new Date().getFullYear()}</span>
                    <span> GCU Senior Project</span>

                </div>
            </div>

        </>
    )
}

export default Footer;