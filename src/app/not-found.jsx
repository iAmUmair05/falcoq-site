import React from 'react'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex-col space-y-4 text-center">
                <div className="dark-heading">Page not found</div>
                <div className="text-para">Sorry, the page you&apos;re looking for isn&apos;t available.</div>
                <div className="flex items-center justify-center">
                    <Link href='/' className="btn-redish hover:scale-110">Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
