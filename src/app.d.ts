// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

type Product = {
	product_url: string
	image_url: string
	description: string
	filenames: string
	cluster: number
}

export { Product }
