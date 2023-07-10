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
      "https://i.pinimg.com/236x/ba/fe/48/bafe48996a2623214e1fa5b2a3ace837.jpg",
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
      "https://i.pinimg.com/236x/bd/3f/02/bd3f023608df1a1f4d6a75f18a1508bb.jpg",
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
      "https://i.pinimg.com/236x/9f/a8/1b/9fa81bf1c1d6eef42f485c63ac4e8e50.jpg",
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
      "https://i.pinimg.com/236x/15/23/c7/1523c7f138b1bb5eb08c75786ebda403.jpg",
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
      "https://i.pinimg.com/236x/3d/59/ad/3d59ad6ca5b2525314e0118ccaf1adab.jpg",
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
      "https://i.pinimg.com/236x/7c/1e/40/7c1e401cf6cf5723082aa5f4fc2e14f7.jpg",
  },
];
