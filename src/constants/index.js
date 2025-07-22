import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2,  thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

import {jordanshoe1,
  jordanShoe1_1, jordanShoe1_2, jordanShoe1_3, jordanShoe1_4, jordanShoe1_5,

  jordanshoe2,
  jordanShoe2_1, jordanShoe2_2, jordanShoe2_3, jordanShoe2_4, jordanShoe2_5,

  jordanshoe3,
  jordanShoe3_1, jordanShoe3_2, jordanShoe3_3, jordanShoe3_4, jordanShoe3_5,

  jordanshoe4,
  jordanShoe4_1, jordanShoe4_2, jordanShoe4_3, jordanShoe4_4, jordanShoe4_5,

  jordanshoe5,
  jordanShoe5_1, jordanShoe5_2, jordanShoe5_3, jordanShoe5_4, jordanShoe5_5,

  jordanshoe6,
  jordanShoe6_1, jordanShoe6_2, jordanShoe6_3, jordanShoe6_4, jordanShoe6_5,

  jordanshoe7,
  jordanShoe7_1, jordanShoe7_2, jordanShoe7_3, jordanShoe7_4, jordanShoe7_5,

  jordanshoe8,
  jordanShoe8_1, jordanShoe8_2, jordanShoe8_3, jordanShoe8_4, jordanShoe8_5,

  jordanshoe9,
  jordanShoe9_1, jordanShoe9_2, jordanShoe9_3, jordanShoe9_4, jordanShoe9_5} from '../assets'

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
  {
    id: 1,
    imgURL: jordanshoe1,
    name: "Jordan Spizike Low SE",
    price: 15995,
    rating: 4.4,
    description: "A bold mashup of iconic Jordans, the Spizike Low SE brings heritage and attitude with a low-top edge. Perfect for streetwear lovers who crave retro DNA with modern comfort.",
    colorShown: "White/Black/University Red",
    style: "FQ1759-100",
    origin: "Vietnam"
  },
  {
    id: 2,
    imgURL: jordanshoe2,
    name: "Jordan Max Aura 7",
    price: 11895,
    rating: 4.6,
    description: "The Max Aura 7 fuses classic Jordan elements with Air Max cushioning for all-day comfort. Lightweight and supportive, it’s built to move with you — on court or off.",
    colorShown: "Black/Gym Red/White",
    style: "DZ4353-006",
    origin: "Indonesia"
  },
  {
    id: 3,
    imgURL: jordanshoe3,
    name: "Jordan Air Rev",
    price: 21695,
    rating: 4.7,
    description: "Step into the future with the Jordan Air Rev — designed for explosive performance and futuristic street style. Engineered with premium materials for responsiveness and sleek aesthetics.",
    colorShown: "Sail/Photon Dust/Black",
    style: "HF4085-100",
    origin: "China"
  },
  {
    id: 4,
    imgURL: jordanshoe4,
    name: "Air Jordan 1 Retro High OG",
    price: 16995,
    rating: 4.1,
    description: "The shoe that started it all. The AJ1 Retro High OG stays true to its heritage with premium leather and classic color blocking. A must-have for sneakerheads and collectors.",
    colorShown: "Black/White/Varsity Red",
    style: "555088-061",
    origin: "China"
  },
  {
    id: 5,
    imgURL: jordanshoe5,
    name: "Jordan 1 High OG 'Black and Gold'",
    price: 16995,
    rating: 4.4,
    description: "Luxury meets legacy in the 'Black and Gold' Jordan 1. With glossy patent leather and bold accents, it’s designed to turn heads while keeping the OG spirit alive.",
    colorShown: "Black/Metallic Gold",
    style: "555088-032",
    origin: "Vietnam"
  },
  {
    id: 6,
    imgURL: jordanshoe6,
    name: "Jordan 'Why Not?' Zer0.3 PF",
    price: 11895,
    rating: 4.9,
    description: "Russell Westbrook’s signature chaos in sneaker form. The Zer0.3 PF brings explosive speed, lockdown support, and wild energy — just like the man himself.",
    colorShown: "White/Flash Crimson/Psychic Blue",
    style: "CD3002-103",
    origin: "Indonesia"
  },
  {
    id: 7,
    imgURL: jordanshoe7,
    name: "Air Jordan Legacy 312 Low",
    price: 12347,
    rating: 4.8,
    description: "The Legacy 312 Low blends iconic Jordan and Nike elements into a fresh remix. Featuring details from the AJ1, AJ3, and Alpha Force, it's a true tribute to Chicago style.",
    colorShown: "White/Black/University Red",
    style: "CD7069-160",
    origin: "Vietnam"
  },
  {
    id: 8,
    imgURL: jordanshoe8,
    name: "Nike Air Max Plus",
    price: 14247,
    rating: 4.2,
    description: "The Air Max Plus offers Tuned Air cushioning with a fierce design inspired by palm trees and ocean waves. A cult favorite reborn for the modern sneaker scene.",
    colorShown: "Black/Black/Volt",
    style: "604133-050",
    origin: "Indonesia"
  },
  {
    id: 9,
    imgURL: jordanshoe9,
    name: "Air Jordan 1 Low Method of Make",
    price: 12295,
    rating: 4.9,
    description: "Crafted for detail lovers, the Method of Make AJ1 Low elevates the original with premium materials and refined stitching. Minimalist and versatile with a luxury edge.",
    colorShown: "White/Vast Grey",
    style: "FJ3459-100",
    origin: "Vietnam"
  }
];



export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Shirley Tucson',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];


export const productImages = [
  {
    id: 1,
    image1: jordanShoe1_1,
    image2: jordanShoe1_2,
    image3: jordanShoe1_3,
    image4: jordanShoe1_4,
    image5: jordanShoe1_5,
  },
  {
    id: 2,
    image1: jordanShoe2_1,
    image2: jordanShoe2_2,
    image3: jordanShoe2_3,
    image4: jordanShoe2_4,
    image5: jordanShoe2_5,
  },
  {
    id: 3,
    image1: jordanShoe3_1,
    image2: jordanShoe3_2,
    image3: jordanShoe3_3,
    image4: jordanShoe3_4,
    image5: jordanShoe3_5,
  },
  {
    id: 4,
    image1: jordanShoe4_1,
    image2: jordanShoe4_2,
    image3: jordanShoe4_3,
    image4: jordanShoe4_4,
    image5: jordanShoe4_5,
  },
  {
    id: 5,
    image1: jordanShoe5_1,
    image2: jordanShoe5_2,
    image3: jordanShoe5_3,
    image4: jordanShoe5_4,
    image5: jordanShoe5_5,
  },
  {
    id: 6,
    image1: jordanShoe6_1,
    image2: jordanShoe6_2,
    image3: jordanShoe6_3,
    image4: jordanShoe6_4,
    image5: jordanShoe6_5,
  },
  {
    id: 7,
    image1: jordanShoe7_1,
    image2: jordanShoe7_2,
    image3: jordanShoe7_3,
    image4: jordanShoe7_4,
    image5: jordanShoe7_5,
  },
  {
    id: 8,
    image1: jordanShoe8_1,
    image2: jordanShoe8_2,
    image3: jordanShoe8_3,
    image4: jordanShoe8_4,
    image5: jordanShoe8_5,
  },
  {
    id: 9,
    image1: jordanShoe9_1,
    image2: jordanShoe9_2,
    image3: jordanShoe9_3,
    image4: jordanShoe9_4,
    image5: jordanShoe9_5,
  },
];
