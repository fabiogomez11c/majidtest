import React from 'react'

export const Image = ({imageSource, imgClass}) => {
    return (
        <>
            <img 
                alt='pic_api'
                src={imageSource}
                className={imgClass}
            />
        </>
    )
}
