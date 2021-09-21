import React from 'react'
import { Image } from "./Image";
import { ScrollSyncPane } from 'react-scroll-sync';

export const ColumnImages = ({data, imgClass, parentClass}) => {

    return (
        <ScrollSyncPane>
            <div className={'main__column ' + parentClass}>
                {data.length > 0 && data.map((imgData) => {
                    return <Image
                        key={imgData.id}
                        imageSource={imgData.largeImageURL}
                        imgClass={imgClass}
                        />
                })}
            </div>
        </ScrollSyncPane>
    )
}
