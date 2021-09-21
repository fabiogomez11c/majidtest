import React from 'react'

export const Image = ({imageSource, imgClass}) => {
    return (
        <div>
            <img 
                alt='pic_api'
                src={imageSource}
                className={imgClass}
            />
        </div>
    )
}
