This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## My Notes

https://farzaa.vercel.app/jewelleryShop

https://www.geeksforgeeks.org/how-to-add-youtube-videos-in-next-js/



// Video Modal
  src="https://www.youtube.com/embed/4UZrsTqkcW4"
  
  //VideoModal 
   src="//www.youtube.com/embed/SwZynNzqBys?autoplay=1&amp;cc_load_policy=1&amp;color=null&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;end=null&amp;fs=1&amp;h1=null&amp;iv_load_policy=1&amp;loop=0&amp;modestbranding=null&amp;mute=0&amp;origin=null&amp;playsinline=null&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;nocookie=false" 

  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClose = () => setShowVideo(false);
  const handleVideoShow = () => setShowVideo(true);

https://dev.to/cesareuseche/how-to-build-a-react-video-modal-with-hooks-4on4


{
        id:0,
        imgSrc:"images/fz-3-pro-2.png",
        name:"Dark Brown Door",
        category:"Solid Color Door",
        price:740.00,
        isInWishlist:false,
        type:'products',
        slug:'dark-brown-door',
    },{
        id:1,
        imgSrc:"images/fz-3-pro-3.png",
        name:"Light Wood Door",
        category:"Double Layer Door",
        price:550.00,
        isInWishlist:false,
        type:'products',
        slug:"light-wood-door",
    },{
        id:2,
        imgSrc:"images/fz-3-pro-4.png",
        name:"Dark Stripe Door",
        category:"Chinese Door",
        price:850.00,
        isInWishlist:false,
        type:'products',
        slug:'dark-stripe-door',
    },{
        id:3,
        imgSrc:"images/fz-3-pro-5.png",
        name:"Modern Fine Door",
        category:"Plastic Door",
        price:440.00,
        isInWishlist:false,
        type:'products',
        slug:'modern-fine-door',
    },{
        id:4,
        imgSrc:"images/fz-3-cat-4.png",
        name:"Brown Wood Door",
        category:"Solid Color Door",
        price:680.00,
        isInWishlist:false,
        type:'products',
        slug:'solid-color-door',
    },{
        id:5,
        imgSrc:"images/fz-3-cat-4.png",
        name:"Brown Layer Door",
        category:"Solid Color Door",
        price:730.00,
        isInWishlist:false,
        type:'products',
        slug:'brown-layer-door',
    },{
        id:6,
        imgSrc:"images/fz-3-cat-3.png",
        name:"Dark Solid Door",
        category:"Bi-fold Doors",
        price:940.00,
        isInWishlist:false,
        type:'products',
        slug:'dark-solid-door',
    },{
        id:7,
        imgSrc:"images/fz-3-cat-2.png",
        name:"Wood Stripe Door",
        category:"Panel Door",
        price:480.00,
        isInWishlist:false,
        type:'products',
        slug:'wood-stripe-door'
    },{
        id:8,
        imgSrc:"images/fz-3-cat-1.png",
        name:"Light Brown Door",
        category:"Wooden Door",
        price:390.00,
        isInWishlist:false,
        type:'products',
        slug:'light-brown-door'
    },{
        id:9,
        imgSrc:"images/fz-3-pro-1.png",
        name:"Plastic Brown Door",
        category:"Plastic Door",
        price:240.00,
        isInWishlist:false,
        type:'products',
        slug:'plastic-brown-door',
    },{
        id:10,
        imgSrc:"images/fz-3-pro-6.png",
        name:"Modern Black Door",
        category:"Steel Door",
        price:430.00,
        isInWishlist:false,
        type:'products',
        slug:'modern-black-door',
    },{
        id:11,
        imgSrc:"images/fz-3-pro-7.png",
        name:"Plastic Black Door",
        category:"Security Door",
        price:580.00,
        isInWishlist:false,
        type:'products',
        slug:'plastic-black-door',
    },{
        id:12,
        imgSrc:"images/fz-3-pro-5.png",
        name:"Wooden Design Door",
        category:"Plastic Door",
        price:340.00,
        isInWishlist:false,
        type:'products',
        slug:'wooden-design-door',
    },{
        id:13,
        imgSrc:"images/fz-3-cat-4.png",
        name:"Rustic Theme Door",
        category:"Wooden Door",
        price:690.00,
        isInWishlist:false,
        type:'products',
        slug:'rustic-theme-door',
    },{
        id:14,
        imgSrc:"images/fz-3-cat-2.png",
        name:"Wood Light Door",
        category:"Wooden Door",
        price:350.00,
        isInWishlist:false,
        type:'products',
        slug:'wood-light-door',
    },{
        id:15,
        imgSrc:"images/feat-pro-1.png",
        name:"Brown Solid Door",
        category:"Wooden Door",
        price:630.00,
        oldPrice:900.00,
        isInWishlist:false,
        type:'products',
        slug:'brown-solid-door',
    },{
        id:16,
        imgSrc:"images/feat-pro-2.png",
        name:"Brown Antique Door",
        category:"Wooden Door",
        price:672.00,
        oldPrice:960.00,
        isInWishlist:false,
        type:'products',
        slug: 'brown-antique-door',
    },
    
]
