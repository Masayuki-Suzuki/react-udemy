import { Nullable } from 'helpers'

declare namespace Unsplash {
    export type Links = {
        download: string
        download_location: string
        html: string
        self: string
    }

    export type Slug = {
        pretty_slug: string
        slug: string
    }

    export type Ancestry = {
        category: Slug
        subcategory: Slug
        type: Slug
    }

    export type Source = {
        ancestry: Ancestry
        cover_photo: Omit<Image, 'tags' | 'sponsorship'>
        description: string
        meta_description: string
        meta_title: string
        subtitle: string
        title: string
    }

    export type Tag = {
        source: Source
        title: string
        type: string
    }

    export type Urls = {
        full: string
        raw: string
        regular: string
        small: string
        thumb: string
    }

    export type UserLinks = {
        followers: string
        following: string
        html: string
        likes: string
        photos: string
        portfolio: string
        self: string
    }

    export type ProfileImage = {
        large: string
        medium: string
        small: string
    }

    export type User = {
        accepted_tos: boolean
        bio: Nullable<unknown>
        first_name: string
        id: string
        instagram_username: string
        last_name: string
        links: UserLinks
        location: string
        name: string
        portfolio_url: string
        profile_image: ProfileImage
        total_collections: number
        total_likes: number
        total_photos: number
        twitter_username: Nullable<string>
        updated_at: string | Date
        username: string
    }

    export type Image = {
        alt_description: string
        categories: string[]
        color: string
        create_at: string | Date
        current_user_collections: unknown[]
        description: string
        height: number
        id: string
        liked_by_user: boolean
        likes: number
        links: Links
        promoted_at: string | Date
        sponsorship: Nullable<unknown>
        tags: Tag[]
        updated_at: string | Date
        urls: Urls
        user: User
        width: number
    }
}
