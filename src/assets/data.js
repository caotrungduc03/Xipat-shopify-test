export const calculateDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split("T")[0];
};

export const subscriptionData = [
  { date: calculateDate(29), subscription: 140 },
  { date: calculateDate(28), subscription: 160 },
  { date: calculateDate(27), subscription: 210 },
  { date: calculateDate(26), subscription: 180 },
  { date: calculateDate(25), subscription: 230 },
  { date: calculateDate(24), subscription: 150 },
  { date: calculateDate(23), subscription: 200 },
  { date: calculateDate(22), subscription: 170 },
  { date: calculateDate(21), subscription: 220 },
  { date: calculateDate(20), subscription: 190 },
  { date: calculateDate(19), subscription: 250 },
  { date: calculateDate(18), subscription: 140 },
  { date: calculateDate(17), subscription: 180 },
  { date: calculateDate(16), subscription: 210 },
  { date: calculateDate(15), subscription: 240 },
  { date: calculateDate(14), subscription: 160 },
  { date: calculateDate(13), subscription: 180 },
  { date: calculateDate(12), subscription: 230 },
  { date: calculateDate(11), subscription: 220 },
  { date: calculateDate(10), subscription: 190 },
  { date: calculateDate(9), subscription: 200 },
  { date: calculateDate(8), subscription: 170 },
  { date: calculateDate(7), subscription: 250 },
  { date: calculateDate(6), subscription: 120 },
  { date: calculateDate(5), subscription: 280 },
  { date: calculateDate(4), subscription: 120 },
  { date: calculateDate(3), subscription: 200 },
  { date: calculateDate(2), subscription: 220 },
  { date: calculateDate(1), subscription: 150 },
  { date: calculateDate(0), subscription: 280 },
];

export const revenueData = [
  { month: "Jan", revenue: 10000 },
  { month: "Feb", revenue: 28000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 18000 },
  { month: "May", revenue: 35000 },
  { month: "Jun", revenue: 40000 },
  { month: "Jul", revenue: 25000 },
  { month: "Aug", revenue: 35000 },
  { month: "Sep", revenue: 30000 },
  { month: "Oct", revenue: 35000 },
  { month: "Nov", revenue: 35000 },
  { month: "Dec", revenue: 22000 },
];

export const productData = [
  {
    id: 1,
    image: "/product-image.png",
    title: "Wireless Bluetooth Headphones",
    rules: [],
    lastUpdate: "10-05-2023 14:32:45",
  },
  {
    id: 2,
    image: "/product-image.png",
    title: "Portable Power Bank 20000mAh",
    rules: [],
    lastUpdate: "09-12-2023 08:22:30",
  },
  {
    id: 3,
    image: "/product-image.png",
    title: "Smart Home Speaker",
    rules: [{ buyFrom: "09-05-2023", buyTo: "09-25-2023", discount: "20%" }],
    lastUpdate: "09-11-2023 17:20:18",
  },
  {
    id: 4,
    image: "/product-image.png",
    title: "USB-C Charging Cable",
    rules: [],
    lastUpdate: "08-09-2023 10:45:12",
  },
  {
    id: 5,
    image: "/product-image.png",
    title: "Wireless Mouse",
    rules: [{ buyFrom: "07-01-2023", buyTo: "07-20-2023", discount: "8%" }],
    lastUpdate: "07-15-2023 11:03:54",
  },
  {
    id: 6,
    image: "/product-image.png",
    title: "Gaming Keyboard RGB",
    rules: [{ buyFrom: "06-10-2023", buyTo: "06-25-2023", discount: "12%" }],
    lastUpdate: "06-19-2023 16:47:30",
  },
  {
    id: 7,
    image: "/product-image.png",
    title: "Laptop Cooling Pad",
    rules: [],
    lastUpdate: "05-18-2023 15:02:17",
  },
  {
    id: 8,
    image: "/product-image.png",
    title: "4K Ultra HD Monitor",
    rules: [{ buyFrom: "04-01-2023", buyTo: "04-30-2023", discount: "25%" }],
    lastUpdate: "04-25-2023 13:52:48",
  },
  {
    id: 9,
    image: "/product-image.png",
    title: "Ergonomic Office Chair",
    rules: [{ buyFrom: "03-01-2023", buyTo: "03-15-2023", discount: "10%" }],
    lastUpdate: "03-22-2023 12:40:55",
  },
  {
    id: 10,
    image: "/product-image.png",
    title: "Smart LED Light Bulbs",
    rules: [{ buyFrom: "02-15-2023", buyTo: "02-28-2023", discount: "7%" }],
    lastUpdate: "02-27-2023 09:32:24",
  },
  {
    id: 11,
    image: "/product-image.png",
    title: "Adjustable Standing Desk",
    rules: [{ buyFrom: "02-01-2023", buyTo: "02-10-2023", discount: "5%" }],
    lastUpdate: "02-15-2023 17:55:12",
  },
  {
    id: 12,
    image: "/product-image.png",
    title: "Noise Cancelling Earbuds",
    rules: [],
    lastUpdate: "01-30-2023 16:42:08",
  },
  {
    id: 13,
    image: "/product-image.png",
    title: "Compact Travel Backpack",
    rules: [{ buyFrom: "01-01-2023", buyTo: "01-15-2023", discount: "10%" }],
    lastUpdate: "01-10-2023 08:55:37",
  },
  {
    id: 14,
    image: "/product-image.png",
    title: "Fitness Tracker Watch",
    rules: [{ buyFrom: "12-01-2022", buyTo: "12-25-2022", discount: "20%" }],
    lastUpdate: "12-25-2022 14:12:18",
  },
  {
    id: 15,
    image: "/product-image.png",
    title: "Portable Photo Printer",
    rules: [],
    lastUpdate: "11-17-2022 07:30:11",
  },
  {
    id: 16,
    image: "/product-image.png",
    title: "Electric Toothbrush",
    rules: [{ buyFrom: "10-01-2022", buyTo: "10-23-2022", discount: "10%" }],
    lastUpdate: "10-23-2022 18:45:10",
  },
  {
    id: 17,
    image: "/product-image.png",
    title: "Wireless Charger Stand",
    rules: [{ buyFrom: "09-01-2022", buyTo: "09-14-2022", discount: "8%" }],
    lastUpdate: "09-14-2022 10:23:44",
  },
  {
    id: 18,
    image: "/product-image.png",
    title: "Smart Water Bottle",
    rules: [{ buyFrom: "08-01-2022", buyTo: "08-30-2022", discount: "12%" }],
    lastUpdate: "08-30-2022 12:00:18",
  },
  {
    id: 19,
    image: "/product-image.png",
    title: "Robot Vacuum Cleaner",
    rules: [{ buyFrom: "07-01-2022", buyTo: "07-27-2022", discount: "15%" }],
    lastUpdate: "07-27-2022 14:10:30",
  },
  {
    id: 20,
    image: "/product-image.png",
    title: "Foldable Yoga Mat",
    rules: [{ buyFrom: "06-01-2022", buyTo: "06-21-2022", discount: "5%" }],
    lastUpdate: "06-21-2022 15:55:48",
  },
  {
    id: 21,
    image: "/product-image.png",
    title: "Air Purifier with HEPA Filter",
    rules: [],
    lastUpdate: "05-10-2022 17:30:42",
  },
  {
    id: 22,
    image: "/product-image.png",
    title: "LED Desk Lamp",
    rules: [{ buyFrom: "04-01-2022", buyTo: "04-15-2022", discount: "12%" }],
    lastUpdate: "04-15-2022 11:15:39",
  },
  {
    id: 23,
    image: "/product-image.png",
    title: "Portable Blender",
    rules: [{ buyFrom: "03-01-2022", buyTo: "03-05-2022", discount: "10%" }],
    lastUpdate: "03-05-2022 10:25:22",
  },
  {
    id: 24,
    image: "/product-image.png",
    title: "Mini Projector",
    rules: [{ buyFrom: "02-01-2022", buyTo: "02-14-2022", discount: "15%" }],
    lastUpdate: "02-14-2022 16:55:15",
  },
  {
    id: 25,
    image: "/product-image.png",
    title: "Wireless Security Camera",
    rules: [],
    lastUpdate: "01-21-2022 14:18:50",
  },
];
