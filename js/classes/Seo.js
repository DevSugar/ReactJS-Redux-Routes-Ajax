export default class Seo {
    setDescription(description) {
        description = description.substring(0, 290)
        document.head.querySelector('meta[name="description"]').content = description
        document.head.querySelector('meta[name="og:description"]').content = description
    }

    setTitle(title) {
        document.title = title
    }
}