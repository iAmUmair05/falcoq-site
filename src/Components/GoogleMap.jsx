import React from 'react'

const GoogleMap = () => {
    return (
        <div>

            <iframe className='w-full h-[55vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1906.516090499173!2d23.842566776599654!3d61.45522793907767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edfa5207cf911%3A0x30f9dbeb7da01cbb!2sOrivedenkatu%208%2C%2033720%20Tampere%2C%20Finland!5e0!3m2!1sen!2s!4v1714645753940!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    )
}

export default GoogleMap