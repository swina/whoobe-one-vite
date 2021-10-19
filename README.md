# whoobe-one-vite

Build full static TailwindCSS web pages/components created with [**whoobe-one-studio**](https://github.com/swina/whoobe-one-studio) using ViteJS.

AlpineJS and GSAP support included.

## whoobe-one-studio

[**Whoobe-One-Studio**](https://whoobe-one-studio.vercel.app) is a visual web page builder that creates a build distribution ready to be deployed with whoobe-one-vite.

### Build a static webpage

- from the preview window in whoobe-one-studio click the mouse right button and select Build.
- save the file in the **./src** folder of whoobe-one-vite as **whoobe.js**
- run **npm run build** or **yarn build** to generate the full static webpage

### SEO support

From whoobe-one-studio the settings of the page/component are used to create the title, description and keywords meta tags for the page.


## Getting Started

- Clone repository and install dependencies

### Dev command

Preview of the static webpage

```
npm run dev
```

or 

```
yarn dev
```


### Build

Build static web page ready to be deployed (**./dist** folder)

```
npm run build
```

or 

```
yarn build
```