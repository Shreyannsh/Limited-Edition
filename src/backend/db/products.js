import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image:
      "https://image01.realme.net/general/20230206/1675655586420.png.webp?width=1080&height=1080&size=1448515",
    name: "realme 10 Pro 5G (Coca Cola Edition) ",
    brand: "realme",
    price: "21999",
    categoryName: "phones",
    rating: "4.4",
    review: "4k",
    // isAddToWishList: false,
    description:
      "Grab the Realme 10 Pro 5G Coca-Cola edition with you to draw attention everywhere you go. The 17.06 cm (6.72) screen and 93.76% screen-to-body ratio allow you to experience a huge screen size with a significantly small frame, and the 120 Hz refresh rate gives you an excellent user experience. With its 108 MP ProLight Camera, this smartphone also offers amazing picture and videography capabilities that help you capture priceless moments. Additionally, the Snapdragon 695 5G Chipset in the Realme 10 Pro 5G is manufactured using a perfect 6 nm fabrication technique, resulting in a power-efficient phone. Moreover, this phone truly feels like a can of Coke thanks to the Metal-like Coating Process, which offers you the lovely sensation of brushed metal while remaining scratch- and fingerprint-resistant.",
  },
  {
    _id: uuid(),
    image:
      "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/r/e/redmi_note_11t_pro_astro_boy-.jpg",
    name: "Redmi Note 11T Astro Boy Edition",
    brand: "Xiaomi",
    price: "37500",
    categoryName: "phones",
    rating: "5.0",
    review: "6k",
    description:
      "The Redmi Note 11T Pro + Astro Boy stands out with its unique design and clearly shows the aesthetic of this iconic character. Besides, the icons and themes of the phone also follow the style of Super Kid Astro. Apart, Weibo has also launched a new emoji package for the Redmi Note 11T series. In addition to the customizations in terms of appearance, it is expected that the configuration of the Redmi Note 11T Pro + Astro Boy is still the same as the Redmi Note 11T Pro + version, such as using the Dimensity 8100 chip, owning a “top” flat LCD screen with high speed. refresh rate up to 144 Hz, 64MP main camera, and 120W fast charging.",
  },
  {
    _id: uuid(),
    image:
      "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/n/o/note_12_turbo_harry_porter.png",
    name: "Redmi note 12 Harry Potter Edition",
    brand: "Xiaomi",
    price: "51920",
    categoryName: "phones",
    rating: "4.2",
    review: "4k",
    description:
      "The processor in it is Qualcomm 7+ Gen2. This model has 12 GB RAM with 256 GB Internal Memory. This model comes with 4G & 3G connectivity. Xiaomi Redmi Note 12 Turbo Harry Potter Edition runs on Android 13. This phone has 64 MP + 8 MP + 2 MP Triple Rear Camera with LED flash along with 16 MP Front Camera without flash.",
  },
  {
    _id: uuid(),
    image:
      "https://files.gsmchoice.com/phones/nubia-z50-ultra-starry-night/nubia-z50-ultra-starry-night-big.jpg",
    name: "Z50 Ultra Starry Night Limited Edition ",
    brand: "ZTE Nubia",
    price: "89977",
    categoryName: "phones",
    rating: "4.7",
    review: "12k",
    description:
      " The phone comes with a 144 Hz refresh rate 6.67-inch touchscreen display offering a resolution of 1080x2400 pixels (FHD+).Nubia Z50 comes with 16GB of RAM. The Nubia Z50 runs Android 13 and is powered by a 5000mAh battery. The Nubia Z50 supports proprietary fast charging.",
  },
  {
    _id: uuid(),

    image:
      "https://images.droidsans.com/wp-content/uploads/2023/02/Samsung-Galaxy-S23-Ultra-BMW-M-Edition-01-1024x768.jpg",
    name: "Galaxy S23 Ultra BMW M Edition",
    brand: "Samsung ",
    price: "126899",
    categoryName: "phones",
    rating: "3.8",
    review: "6k",
    description:
      'Samsung Galaxy S23 Ultra BMW M Edition is basically the same smartphone as the "ordinary" flagship Galaxy S23 Ultra. However, it is a limited edition and sold in a circulation of only 1000 pieces . The Starter Set contains lots of BMW M gadgets and accessories.',
  },
  {
    _id: uuid(),
    image:
      "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/r/e/red_magic_7_pro_transformers_edition.jpg",
    name: "Red Magic 7 Pro Transformers Edition",
    brand: "Red Magic",
    price: "55221",
    categoryName: "phones",
    rating: "3.2",
    review: "2k",
    description:
      "Red Magic 7 Pro Transformers Edition is a gaming smartphone, which runs on Red Magic OS 5.0 which is an upgraded custom UX from Nubia with tweaks and features for a great gaming experience.",
  },
  {
    _id: uuid(),
    image:
      "https://fdn.xiaomiui.net/wp-content/uploads/2023/03/Redmi-Buds-4-Harry-Potter-Edition-1.png?strip=all&lossy=1&w=640&ssl=1",
    name: "Redmi Buds 4 Harry Potter Edition",
    brand: "Redmi",
    price: "7899",
    categoryName: "earbuds",
    rating: "4.8",
    review: "2k",
    description:
      "Redmi Buds 4 Harry Potter Edition comes with an in-ear design with the latter featuring a stem. Users can control various functions by tapping on either earbud.",
  },
  {
    _id: uuid(),
    image:
      "https://image01.oneplus.net/ebp/202012/04/1-m00-1e-00-rb8bwl_j9ewatjelaaj_14lbjxa475.png",
    name: "OnePlus Buds Z - Steven Edition",
    brand: "OnePlus",
    price: "3699",
    categoryName: "earbuds",
    rating: "3.5",
    review: "5k",
    description:
      "The OnePlus Buds Z come to life with Steven Harrington’s psychedelic-pop aesthetic and “Cool Cat” visuals. Visually arresting, the dramatic design of these earphones add a dash of color to your life with impressive sound quality to match. With a 10mm dynamic driver, Dolby Atmos and Bass Boost technology, these limited-edition earphones sound as good as they look.",
  },
  {
    _id: uuid(),
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM131-main_600x.png?v=1639988622",
    name: "OnePlus TWS H4 Ironman Edition",
    brand: "OnePlus",
    price: "3999",
    categoryName: "earbuds",
    rating: "3.6",
    review: "1.5k",
    description:
      "OnePlus TWS H4 Ironman Edition comes with an in-ear design with the latter featuring a stem. Users can control various functions by tapping on either earbud.",
  },
  {
    _id: uuid(),
    image:
      "https://images.prismic.io/skullcandy/aa8ca809-b331-493c-8c4e-fe8d8274dd81_2000x2000_burton_mod.png?auto=compress,format",
    name: "Burton Mod",
    brand: "SkullCandy",
    price: "7999",
    categoryName: "earbuds",
    rating: "4.8",
    review: "12k",
    description:
      "SkullCandy Burton Mod sound without the clutter. Enjoy 25 hours of wireless playtime and the freedom of listening without wires with none of the compromise on sound. These wireless earbuds do all the heavy lifting for you, so all you have to do is grab your music and go.",
  },
  {
    _id: uuid(),
    image:
      "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw1a34167a/images/marshall/headphones/minor-iii/large/pos-desktop-marshall-minor-iii-black-03.png?sw=1120&sh=1120&sm=fit",
    name: "Minor III",
    brand: "Marshall",
    price: "12999",
    categoryName: "earbuds",
    rating: "4.9",
    review: "11.6k",
    description:
      "Meet Minor III and experience Marshall signature sound without the clutter. Enjoy 25 hours of wireless playtime and the freedom of listening without wires with none of the compromise on sound. These wireless earbuds do all the heavy lifting for you, so all you have to do is grab your music and go.",
  },
  {
    _id: uuid(),
    image:
      "https://media.graphassets.com/resize=w:600,fit:crop/quality=value:65/auto_image/compress/8pHj00TDTyq3s6Tj9wsx",
    name: "CX Plus Special Edition ",
    brand: "Sennheiser",
    price: "8990",
    categoryName: "earbuds",
    rating: "2.5",
    review: "5k",
    description:
      "ennheiser CX Plus Special Edition 509247 TWS Earbuds with Active Noise Cancellation to listen to music even when you’re on the move. If you’re looking for a pair of truly wireless earbuds that can be worn throughout the day, you need to choose ones made from high-grade material. These truly wireless earbuds can comfortably rest against your neck as it is made of lightweight high-quality material",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/519W1c7DgUL._SX522_.jpg",
    name: "Prism Periscope Glasses",
    brand: "House of Quirk",
    price: "599",
    categoryName: "gadgets",
    rating: "3.5",
    review: "1.2k",
    description:
      "Our high definition prism glasses help you read a book without eye fatigue or physical strain",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/61xfcVzSvdS._SX569_.jpg",
    name: " Plasma Electric Gas Lighter",
    brand: "VEHHE",
    price: "799",
    categoryName: "gadgets",
    rating: "1.5",
    review: "2.3k",
    description:
      " This is the upgraded Crasts arc lighter which can display real time battery volume. When 5 LED lights on the barrel turn on, it is full charged. USB lighter can provides over 500 use,s on a full charge.",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/515wECg1FXL._UX679_.jpg",
    name: "Vibes Audio Smart Sunglasses",
    brand: "Fastrack",
    price: "2999",
    categoryName: "gadgets",
    rating: "3.7",
    review: "2.4k",
    description:
      "Fastrack square unisex smart audio sunglasses, Black , Medium Get up to 3 hours of playback once fully charged. Integrated blue tooth 4.1, Rechargeable lithium-Ion 200 MAh battery. Built-in Speakers with polarized UV 400 lens. Lens width : 54 mm ,Bridge width :12 mm, Temple length : 144",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/71mqeFt2qPL._SX522_.jpg",
    name: "Airblock Programmable Drone",
    brand: "Makeblock",
    price: "30999",
    categoryName: "gadgets",
    rating: "5",
    review: "2.4k",
    description: "Detechable magnetic drone parts, crash secure",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/51qfMDVpvYL._SY500_.jpg",
    name: "3D Pen",
    brand: "PalmCosmetic",
    price: "1032",
    categoryName: "gadgets",
    rating: "2.8",
    review: "2.8k",
    description:
      "  Create quality time and a colorful world for the family Easy to operate and safe to use -- the filament is heated, squeezed and cooled by the pen body. Create custom 3D objects without clogging and smooth graffiti. Freely switch the filament type.",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/61mqi6oj8LL._AC_UY218_.jpg",
    name: "Ergonomic Mouse",
    brand: "iclever",
    price: "1698",
    categoryName: "gadgets",
    rating: "4.3",
    review: "3.2k",
    description:
      "Get things done quicker with the ergonomic mouse. You won't even have to move your wrist with the built-in Backward/Forward Page buttons.",
  },
  {
    _id: uuid(),
    image:
      "https://fossil.scene7.com/is/image/FossilPartners/LE1158_main?$sfcc_fos_large$",
    name: "Limited Edition Harry Potter",
    brand: "Fossil",
    price: "14995.00",
    categoryName: "watches",
    rating: "4.5",
    review: "4.5k",
    description:
      "Three-Hand Gryffindor™ Nylon Watch Limited Edition Harry Potter",
  },
  {
    _id: uuid(),
    image:
      "https://cdn.shopify.com/s/files/1/0274/0921/9648/products/GRAHAMWATCHESCHRONOFIGHTERVINTAGEEMERGENCY2CVAS.B35A_1800x1800.png?v=1630071624",
    name: "Chronofighter Vintage Emergency",
    brand: "GRAHAM",
    price: "121000",
    categoryName: "watches",
    rating: "4.8",
    review: "3.8k",
    description:
      "The Graham Chronofighter Vintage collection is a reminder of the WW2-era bomber watches worn by the bomber pilots of the USAF. The trigger on the left side, the oversized dials, and large hours markers make it the best available option for an aviator destined to bomb enemy trenches with accuracy. In the modern world, the Graham Chronofighter Vintage carries the same tradition of being the same “bomber watch”. ",
  },
  {
    _id: uuid(),
    image:
      "https://www.hublot.com/sites/default/files/styles/watch_tile_472_592/public/2023-01/451.OX_.1180.OX_.3999-big-bang-integral-king-gold-rainbow-42-mm.png?itok=B1MlOHQl",
    name: "Big Bang Unico Red Magic",
    brand: "HUBLOT",
    price: "180700",
    categoryName: "watches",
    rating: "4.3",
    review: "3.5k",
    description:
      "The modular escapement consists of a balance wheel, an escape wheel, and the escapement itself. Functioning as one unit, the modular escapement can be removed easily with its other parts kept intact.",
  },
  {
    _id: uuid(),
    image:
      "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/l/u/luminox-sea-xs-0301-bo-l-large.jpg",
    name: "Leatherback Sea Turtle Dive Watch",
    brand: "LUMINOX",
    price: "17850",
    categoryName: "watches",
    rating: "3.5",
    review: "4.9k",
    description:
      "The classic Luminox case design with the protected crown balanced by an opposite outcropping has often been compared to the shape of a turtle. Applied to the Luminox SEA series watches, the now iconic Luminox case design is referred to as the “turtle-shape” case.",
  },
  {
    _id: uuid(),
    image:
      "https://cdn.shopify.com/s/files/1/2309/2521/products/image_360x.jpg?v=1681470164",
    name: "Earth moving rare luxury watch",
    brand: "L.B.RAMANI",
    price: "19999",
    categoryName: "watches",
    rating: "4.1",
    review: "2.7k",
    description:
      " EARTH PRIDE is a lifestyle brand that can bring unique and limited-edition time piece into the hands of people all over the world.",
  },
  {
    _id: uuid(),
    image:
      "https://img.thesitebase.net/10117/10117520/products/ver_12ba6aaad969af0bb0af06e102efc4caa/0x1080@1617175417fe7b96ce0f.webp",
    name: "CIGA Limited Edition Military Watch",
    brand: "CIGA",
    price: "40500",
    categoryName: "watches",
    rating: "4.7",
    review: "1.2k",
    description:
      "Design inspired by the aircraft carrier deck, Aircraft Carrier has a military IP titanium coating, anti-corrosion and with incredible wear resistance. For aircraft carriers to withstand the ocean, surfaces must not only be resistant to corrosion but also to high temperatures above 2000 ° C. The CIGA Mechanical Aircraft Carrier has a high hardness IP titanium coating .",
  },
  {
    _id: uuid(),
    image:
      "https://rukminim1.flixcart.com/image/832/832/kh9gbrk0/computer/t/e/f/msi-original-imafxb9mdy7m6zvd.jpeg?q=70",
    name: "MSI Dragon Shield Edition",
    brand: "MSI",
    price: "164990",
    categoryName: "laptop",
    rating: "4.6",
    review: "4.6k",
    description:
      " bring home this MSI GE66 Dragonshield laptop that comes with the sci-fi design theme that features the Mystic Light RGB lighting. With a host of connectivity options, you can enjoy 8k resolution or the use of multiple displays. This laptop stays cool even when it is pushed to its limit, thanks to the Cooler Boost 5 technology featured in it.",
  },
  {
    _id: uuid(),
    image:
      "https://www.reliancedigital.in/wp-content/uploads/2022/08/asus-X14-Space-Edition_3.jpg",
    name: "Zenbook 14X OLED Space Edition",
    brand: "ASUS ",
    price: "99990",
    categoryName: "laptop",
    rating: "3.7",
    review: "4k",
    description:
      "Enjoy high-speed operation, efficient tasking, and a visually charming experience with the ASUS Zenbook 14X OLED Space Edition which comes packed with mesmerising features that can keep you glued to the screen. This laptop features a complete aluminum alloy design with a Zero-G Titanium finish which makes it look attractive. Additionally, the slender design of this laptop which weighs around 1.4 kg and measures up to 15.9 mm in thickness makes it highly convenient to use.",
  },
  {
    _id: uuid(),
    image:
      "data:image/jpeg;base64,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",
    name: "G15 5521 Special Edition",
    brand: "Dell",
    price: "139999",
    categoryName: "laptop",
    rating: "3.5",
    review: "4k",
    description:
      "The Dell G15 5521 SE Gaming Laptop is the perfect option for anyone who needs a gaming laptop with some extra features. It is a very powerful laptop with a powerful Intel Core i7 12th generation processor, 16GB DDR5 RAM, and 1TB SSD. It has a 15.6-inch QHD screen with a 240Hz refresh rate that makes for smooth gameplay. The NVIDIA GeForce RTX 3060 graphics are also top-notch and deliver smooth visuals while gaming. Battery life is also excellent, providing up to 10 hours of gaming. The dual speakers are also of good quality and can be heard throughout the room.",
  },
  {
    _id: uuid(),
    image: "https://images.anandtech.com/doci/14501/IMG_3605-678_678x452.jpg",
    name: "Zenbook Edition 30 UX334",
    brand: "Asus",
    price: "98999",
    categoryName: "laptop",
    rating: "4.6",
    review: "5.6k",
    description:
      "Back in 2006, ASUS created the S6F Leather Collection, the world's first laptop to incorporate genuine-leather panels. ZenBook Edition 30 brings a futuristic twist to that classic look, with a lid encased in luxurious Pearl White genuine leather for a pure, bold style statement. The Rose Gold anodized diamond-cut edges and trim bar, accompanied by the exclusive gold-plated 30th anniversary logo on the lid, are eye-catching additions that make ZenBook Edition 30 something very special.",
  },
  {
    _id: uuid(),
    image:
      "data:image/jpeg;base64,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",
    name: "Star Wars Special Edition",
    brand: "HP",
    price: "89990",
    categoryName: "laptop",
    rating: "3.2",
    review: "6k",
    description:
      "The Galactic Empire lives on in the battle-worn design of the Star Wars Special Edition Notebook from HP. The distressed outside finish looks like its seen galactic combat coupled with Darth Vader staring at you and Galactic Empire written in Auberesh.",
  },
  {
    _id: uuid(),
    image:
      "data:image/jpeg;base64,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",
    name: "Raider GE78 HX",
    brand: "MSI",
    price: "200000",
    categoryName: "laptop",
    rating: "4.5",
    review: "1.7k",
    description:
      "he MSI Raider GE78 HX Laptop ensures high-speed performance for both gamers and creators. And, thanks to its quantum leap in performance and AI-powered graphics, you can enjoy lifelike visuals with ray tracing and high FPS gaming with minimal latency. And, this laptop features new ways to boost creative productivity and accelerate workflow, so you can explore complex gaming worlds freely.",
  },
];
