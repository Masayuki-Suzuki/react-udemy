import '../styles/imageList.sass'
import React from 'react'
import { Unsplash } from '~/types/unsplash'

type ImageCardPropsType = {
    image: Unsplash.Image
}
type ImageCardState = {
    spans: number
}

class ImageCard extends React.Component<ImageCardPropsType, ImageCardState> {
    private imageRef = React.createRef<HTMLImageElement>()

    state = {
        spans: 1
    }

    componentDidMount(): void {
        this.imageRef.current?.addEventListener('load', this.setSpans)
    }

    setSpans = (): void => {
        const height = this.imageRef.current?.clientHeight ?? 10
        const spans = Math.ceil(height / 10)
        this.setState({ spans })
    }

    render(): JSX.Element {
        const { alt_description, urls } = this.props.image
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard
