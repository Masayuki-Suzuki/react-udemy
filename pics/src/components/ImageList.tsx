import '../styles/imageList.sass'
import React from 'react'
import ImageCard from './ImageCard'
import { Unsplash } from '~/types/unsplash'

type ImageListPropsType = {
    imaegs: Unsplash.Image[]
}

const ImageList = (props: ImageListPropsType) => {
    const images = props.imaegs.map((image: Unsplash.Image) => <ImageCard image={image} key={image.id} />)

    return <div className="image-list">{images}</div>
}

export default ImageList
