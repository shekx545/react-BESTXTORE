import Header from "./components/header/Header"
import Banner from "./components/banner/Banner"
import Hero from "./components/hero/Hero" 
import Announcement from "./components/announcement/Announcement"
import Cover from "./components/cover/Cover"
import Calltoaction from "./components/calltoaction/Calltoaction"
import Highlight from "./components/highlight/Highlight"
import Intro from "./components/intro/Intro"
import Masthead from "./components/masthead/Masthead"
import Footer from "./components/footer/Footer"

const App = () => {
    const categoriesData = [
    {
      title: "Smartphones",
      items: ["iPhone", "iPhone Accessories", "Postpaid Phones", "Sale off"],
      link: "All Smartphones",
    },
    {
      id: 2,
      title: "Camera",
      items: ["Professional", "Camera Accessories", "Cheap Camera", "Sale off"],
      link: "All Camera",
    },
    {
      id: 3,
      title: "Wristwatch",
      items: ["Sports Watch", "Fashion Watches", "Smart Watch", "Sale off"],
      link: "All Wristwatch",
    },
        {
      id: 5,
      title: "Headphones",
      items: ["iPhone", "iPhone Accessories", "Postpaid Phones", "Sale off"],
      link: "All Headphones",
    },
    {
      id: 6,
      title: "Tablets",
      items: ["iPad", "iPad Accessories", "Postpaids iPad", "Sale off"],
      link: "All Tablets",
    },
    {
      id: 8,
      title: "Laptop",
      items: ["Gaming Laptop", "Accessories", "Office Laptop", "Sale off"],
      link: "All Laptop",
    },
  ];
  
    const introData = [
    {
      id: 9,
      title: "Macbook Air 2020 13 inch Apple M1 - 8GB RAM 256GB SSD",
      price: 25,
      oldPrice: 35,
      badge: "New",
      discount: "10%",
      reviews: 12,
    },
    {
      id: 10,
      title: "AirPods (3rd generation) with Lightning Charging Case",
      price: 45,
      badge: "New",
      reviews: 12,
    },
    {
      id: 11,
      title: "Apple iPhone 14 - 128GB Midnight - Genuine Product",
      price: 825,
      badge: "New",
      reviews: 12,
    },
    {
      id: 12,
      title: "Canon Eos 450D Lens Kit 18-55Mm F/3.5-5.6 Is",
      price: 165,
      badge: "New",
      reviews: 12,
    },
    {
      id: 13,
      title: "Apple iPad Pro 11 inch M1 2021 Wifi 128GB|8GB",
      price: 425,
      badge: "New",
      reviews: 12,
    },
    {
      id: 14,
      title: "Smart Tivi Samsung 4K 75 inch 75AU7000 UHD",
      price: 465,
      oldPrice: 595,
      badge: "New",
      discount: "10%",
      reviews: 12,
    },
    {
      id: 15,
      title: "JJBL WH-CH520 Wireless Bluetooth Earphones Headset",
      price: 105,
      oldPrice: 155,
      badge: "New",
      discount: "10%",
      reviews: 12,
    },
    {
      id: 16,
      title: "Apple Watch Series 8 GPS - Cellular, Aluminum Case",
      price: 205,
      oldPrice: 255,
      badge: "New",
      discount: "10%",
      reviews: 12,
    },
  ];
  return (
    <div>
      <Header />
      <Banner />
      <Hero />
      <Announcement />
      <Cover  />
      <Calltoaction categoriesData={categoriesData}/> 
      <Highlight />
      <Intro data={introData}/>
      <Masthead />
      <Footer />
    </div>
  )
}

export default App