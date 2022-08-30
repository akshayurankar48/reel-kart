import React from 'react'
import terrain from "../assets/terrain.svg";
import stories from "../assets/stories.svg";
import options from "../assets/options.svg";
import bag from "../assets/bag.svg";
import play from "../assets/play.svg";
import stack from "../assets/stack.svg";
import template from "../assets/template.svg";
import products from "../assets/products.svg";
import reels from "../assets/reels.svg";
import checkout from "../assets/checkout.svg";
import views from "../assets/views.svg";
import heart from "../assets/heart.svg";
import card from "../assets/credit-card.svg";
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";
import grid5 from "../assets/grid5.png";
import grid6 from "../assets/grid6.png";
import grid7 from "../assets/grid7.png";
import grid8 from "../assets/grid8.png";
import down from "../assets/down.svg";
import shoppingbag from "../assets/shoppingbag.png";
import mark from "../assets/mark.png";
import zukerberg from "../assets/zukerberg.png";
import youtube from "../assets/youtube.png";
import uploadreels from "../assets/uploadreels.png";
import tiktok from "../assets/tiktok.png";
import addsocial from "../assets/addsocial.png";
import addplus from "../assets/addplus.png";
import fab from "../assets/fab.svg";
import account from "../assets/account.svg";
import pen from "../assets/pen.svg";
import creditCard from "../assets/credit-card.svg";
import ereader from "../assets/ereader.svg";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

const showUploadReels = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/myproducts',
    icon: <IoIcons.IoIosPaper/>,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/reelstore',
    icon: <FaIcons.FaCartPlus/>,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/connections',
    icon: <IoIcons.IoMdPeople/>,
    cName: 'nav-text'
  }, {
    title: 'Messages',
    path: '/',
    icon: <FaIcons.FaEnvelopeOpenText/>,
    cName: 'nav-text'
  }
]

const sidebar = [
  {
    id: 1,
    optionName: "Sleepy Owl",
    optionItems: [
      {
        icon: terrain,
        alt: "Overview",
        active: true,
        name: "Overview",
        path: "/"
      },
      {
        icon: stories,
        alt: "Reel Store",
        active: false,
        name: "Reel Store",
        path: "/reelstore"
      },
    ],
  },
  {
    id: 2,
    optionName: "Setup",
    optionItems: [
      { 
        icon: play,
        alt: "My Reels",
        active: false,
        name: "My Reels",
        newTag: "New",
        path: "/"
      },
      {
        icon: bag,
        alt: "Products",
        active: false,
        name: "Products",
        path: "/myproducts"
      },
      {
        icon: stack,
        alt: "Mapping",
        active: false,
        name: "Mapping",
        path: "/mapping"
      },
    ],
  },
  {
    id: 3,
    optionName: "Configurations",
    optionItems: [
      {
        icon: options,
        alt: "Analytics",
        active: false,
        name: "Analytics",
        path: "/error"
      },
      {
        icon: template,
        alt: "Connections",
        active: false,
        name: "Connections",
        path: "/connections"
      },
    ],
  },
];

const socials = [
  {
    id: 1,
    image: uploadreels,
    socialName: 'Upload Reels'
  },
{
  id: 2,
  image: mark,
  socialName: 'Facebook'
},
{
  id: 3,
  image: youtube,
  socialName: 'Youtube'
},
{
  id: 4,
  image: zukerberg,
  socialName: 'Instagram'
},
{
  id: 5,
  image: tiktok,
  socialName: 'TikTok Coming Soon'
},
{
  id: 6,
  image: addsocial,
  socialName: 'Add Social Media Channel'
},
{
  id: 7,
  image: shoppingbag,
  socialName: 'Shopify'
},
{
  id: 8,
  image: addplus,
  socialName: 'Connect More Stores'
}
]

const maps = [
  {
    id: 1,
    icon: down,
    image: grid1,
    highlighted: true,
    productName: 'Product Name',
    images: [
      {
        id: 1,
        src: grid1,
        alt: 'gird1'
      },
      {
        id: 2,
        src: grid1,
        alt: 'gird1'
      },
      {
        id: 3,
        src: grid1,
        alt: 'gird1'
      },
      {
        is: 4,
        src: grid1,
        alt: 'gird1'
      },
    ]
  },
  {
    id: 2,
    icon: down,
    image: grid2,
    highlighted: true,
    active: false,
    productName: 'Product Name',
    images: [
      {
        is: 1,
        src: grid2,
        alt: 'gird2'
      },
      // {
      //   is: 2,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 3,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 4,
      //   src: grid1,
      //   alt: 'gird1'
      // },
    ]
  },
  {
    id: 3,
    icon: down,
    image: grid3,
    highlighted: false,
    active: true,
    productName: 'Product Name',
    images: [
      {
        is: 1,
        src: grid3,
        alt: 'gird3'
      },
      // {
      //   is: 2,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 3,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 4,
      //   src: grid1,
      //   alt: 'gird1'
      // },
    ]
  },
  {
    id: 4,
    icon: fab,
    image: grid4,
    highlighted: false,
    active: true,
    productName: 'Product Name',
    images: [
      {
        is: 1,
        src: grid2,
        alt: 'gird2'
      },
      // {
      //   is: 2,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 3,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 4,
      //   src: grid4,
      //   alt: 'gird4'
      // },
    ]
  },
  {
    id: 5,
    icon: fab,
    image: grid5,
    highlighted: false,
    active: true,
    productName: 'Product Name',
    images: [
      {
        is: 1,
        src: grid5,
        alt: 'gird5'
      },
      // {
      //   is: 2,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 3,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 4,
      //   src: grid4,
      //   alt: 'gird4'
      // },
    ]
  },
  {
    id: 6,
    icon: fab,
    image: grid6,
    highlighted: false,
    active: true,
    productName: 'Product Name',
    images: [
      {
        is: 1,
        src: grid6,
        alt: 'gird6'
      },
      // {
      //   is: 2,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 3,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 4,
      //   src: grid4,
      //   alt: 'gird4'
      // },
    ]
  },
  {
    id: 7,
    icon: fab,
    image: grid7,
    highlighted: false,
    active: true,
    productName: 'Product Name',
    images: [
      {
        is: 1,
        src: grid7,
        alt: 'gird7'
      },
      // {
      //   is: 2,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 3,
      //   src: grid1,
      //   alt: 'gird1'
      // },
      // {
      //   is: 4,
      //   src: grid4,
      //   alt: 'gird4'
      // },
    ]
  },
]

const analytics = [
  {
    id: 1,
    icon: account,
    count: "56,839",
    cardTitle: "Views",
    cardDesc: "Video views",
    whiteBg: true,
  },
  {
    id: 2,
    icon: ereader,
    count: "14,063",
    cardTitle: "Views",
    cardDesc: "Video views",
    whiteBg: true,
  }, {
    id: 3,
    icon: account,
    count: "56,839",
    cardTitle: "Views",
    cardDesc: "Video views",
    whiteBg: true,
  }, {
    id: 4,
    icon: account,
    count: "56,839",
    cardTitle: "Views",
    cardDesc: "Video views",
    whiteBg: true,
  }
]

const cards = [
  {
    id: 1,
    icon: products,
    count: "25",
    cardTitle: "Products",
    cardDesc: "Added on Reel Cart",
    whiteBg: true,
  },
  {
    id: 2,
    icon: reels,
    count: "100",
    cardTitle: "Reels",
    cardDesc: "Added on Reel Cart",
    whiteBg: true,
  },
  {
    id: 3,
    icon: reels,
    count: "0",
    cardTitle: "Add To Cart",
    cardDesc:
      "Make sure that your videos are explaining your products correctly. That will get you the Add to Carts.",
  },
  {
    id: 4,
    icon: checkout,
    count: "25",
    cardTitle: "Initiate Checkout",
    cardDesc: "Total Number of checkouts that happened from Reel Kart",
  },
  {
    id: 5,
    icon: views,
    count: "0",
    cardTitle: "Views",
    cardDesc: "Make sure your like is visible on your store.",
  },
  {
    id: 6,
    icon: heart,
    count: "0",
    cardTitle: "Engagement",
    cardDesc: "No one has engaged with your videos yet.",
  },
  {
    id: 7,
    icon: card,
    count: "0",
    cardTitle: "Revenue",
    cardDesc:
      "This is where you’ll be able to see revenue generated from Rell Kart",
  },
];

export { sidebar, cards, maps, socials, analytics, showUploadReels };
