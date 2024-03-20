const mongoose=require('mongoose')
const Product=require('./model/Product')

const dummy_data=[
    {
        name:"i Phone 15",
        price:80000,
        img:"https://images.unsplash.com/photo-1695048132853-026f93f40f7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
        desc:" iPhone 15 boasts a powerful new processor, delivering lightning-fast performance and seamless multitasking. The device also incorporates improvements to its display, offering vibrant colors and improved brightness for an immersive viewing experience.With a focus on sustainability, the iPhone 15 utilizes eco-friendly materials in its construction and features enhanced energy efficiency, reducing its environmental impact. Furthermore, it offers enhanced privacy and security features to safeguard user data.",
    },
    {
        name:"macbook",
        price:200000,
        img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        desc:" The MacBook is a compact and lightweight option, perfect for users who prioritize mobility. It features a Retina display, an ultra-thin design, and a fanless architecture for silent operation.",
    },
    {
        name:"Apple earpods",
        price: 45000,
        img: "https://images.unsplash.com/photo-1535057929422-25260d3e1a54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjBlYXJwb2RzfGVufDB8fDB8fHww",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "apple watch",
        price: 50000,
        img: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "apple airtag",
        price: 12000,
        img: "https://images.unsplash.com/photo-1620376153436-02f9a4b44d88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBhaXJ0YWd8ZW58MHx8MHx8fDA%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "apple tv",
        price: 16000,
        img: "https://images.unsplash.com/photo-1592042221673-7320147c7482?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjB0dnxlbnwwfHwwfHx8MA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "apple vision pro",
        price: 300000,
        img: "https://images.unsplash.com/photo-1707228773518-7ca0492d0c4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjB2aXNpb258ZW58MHx8MHx8fDA%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "apple mac mini",
        price: 50000,
        img: "https://images.unsplash.com/photo-1611648695058-f7df03849bc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlJTIwbWFjfGVufDB8fDB8fHww",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
]
mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
.then(async ()=>{
await Product.create(dummy_data)
})