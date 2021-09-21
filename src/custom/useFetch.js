import { useEffect } from "react"


export const useFetch = (setData) => {
    
    useEffect(() => {
        fetch('https://pixabay.com/api/?key=12729735-08045b0fe1942e2e1fc99b5fa&q=yellow+flowers&image_type=photo&pretty=true&per_page=100')
            .then((output) => output.json())
            .then((imagesInfo) => {
                const outData = imagesInfo
                setData(outData.hits)
            })
    }, [setData])

}