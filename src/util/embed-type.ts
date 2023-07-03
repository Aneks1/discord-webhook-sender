export default interface embedType {
    title: string
    color: number
    description: string
    timestamp: string
    url: string
    author: {
        name?: string
        url?: string
        icon_url?: string
    },
    image: {
        url?: string
    }
    thumbnail: {
        url?: string
    }
    footer: {
        text?: string
        icon_url?: string
    }
    fields: []
}