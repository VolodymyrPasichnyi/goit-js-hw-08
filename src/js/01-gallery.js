import { galleryItems } from './gallery-items.js';
console.log(galleryItems)
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery')
const galleryEl = []

galleryItems.forEach(el => {
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = el.original

	const galleryImage = document.createElement('img')
	galleryImage.className = 'gallery__image'
	galleryImage.src = el.preview
	galleryImage.setAttribute('title', el.description)
	galleryImage.alt = el.description

	galleryLink.append(galleryImage)
	galleryEl.push(galleryLink)
})

gallery.append(...galleryEl)

new SimpleLightbox('.gallery a', {captionDelay: 250})
