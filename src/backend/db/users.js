import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "live and let live",
    link: `www.google.com`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
  },
  {
    _id: uuid(),
    firstName: "Vaishnavi",
    lastName: "Parate",
    username: "vaishaviparate",
    password: "vaishaviparate",
    bio: "live and let live",
    link: `www.google.com`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
  },
  {
    _id: uuid(),
    firstName: "Atharv",
    lastName: "Thakare",
    username: "atharvroy",
    password: "atharvoy",
    bio: "live and let live",
    link: `www.google.com`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
  },
  {
    _id: uuid(),
    firstName: "Dhanashri",
    lastName: "Rawat",
    username: "dhanashree",
    password: "dhanashree",
    bio: "live and let live",
    link: `www.google.com`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
  },
  {
    _id: uuid(),
    firstName: "Shweta",
    lastName: "Khanna",
    username: "shwetak",
    password: "shwetak",
    bio: "live and let live",
    link: `www.google.com`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
  },
  {
    _id: uuid(),
    firstName: "Sagar",
    lastName: "P",
    username: "sagarp",
    password: "sagarp",
    bio: "live and let live",
    link: `www.google.com`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
  },
  {
    _id: uuid(),
    firstName: "Aarav",
    lastName: "Parate",
    username: "aaravv",
    password: "aaravv",
    bio: "live and let live",
    link: `www.google.com`,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
  },
];
