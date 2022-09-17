import { createOgImage } from "@/lib/createOgImage"
import type { DefaultSeoProps } from "next-seo"

const title = `Branko Ottavianelli`
const description = `Welcome to my blog where I will share my thoughts and insights about the blockchain world, and new technologies in general. I'm a software developer with a passion for crypto, blockchain and related technologies.`
const domain = `branko.ott`
const twitter = `@branko96`
const meta = `Web 3 Blog Blockchain`

export const seo: DefaultSeoProps = {
  title: title + " | " + meta,
  description,
  openGraph: {
    title,
    type: "website",
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: createOgImage({ title, meta }),
        width: 1600,
        height: 836,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
}
