import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
    content: "She flies by her own wings",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: "2022-04-16T11:25:24+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
    content: "lorem ispsum",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: "2022-03-12T11:25:24+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
    content: "My life my rules",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          createdAt: "2023-06-22T22:43:12+05:30",
          firstName: "Adarsh",
          followers: [],
          following: [],
          lastName: "Balika",
          updatedAt: "2023-06-22T22:43:12+05:30",
          username: "adarshbalika",
          _id: "beb17457-5b15-48d0-9891-918732b1a037",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vaishnavi",
    lastName: "Parate",
    username: "vaishaviparate",
    createdAt: "2021-03-12T11:20:24+07:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
    content: "Trust the magic of new beginning",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          createdAt: "2023-06-22T22:43:12+05:30",
          firstName: "Adarsh",
          followers: [],
          following: [],
          lastName: "Balika",
          updatedAt: "2023-06-22T22:43:12+05:30",
          username: "adarshbalika",
          _id: "beb17457-5b15-48d0-9891-918732b1a037",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vaishnavi",
    lastName: "Parate",
    username: "vaishaviparate",
    createdAt: "2022-08-07T11:25:26+07:40",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
    content: "Rise and slay",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Atharv",
    lastName: "Roy",
    username: "atharvroy",
    createdAt: "2020-08-07T11:25:26+07:40",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
    content: "Shine like a star",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Dhanashree",
    lastName: "Deshmukh",
    username: "dhanashree",
    createdAt: "2022-09-25T11:25:01+01:40",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
    content: "When nothing goes right, go left",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Shweta",
    lastName: "Khanna",
    username: "shwetak",
    createdAt: "2000-08-07T11:25:01+01:40",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
    content: "be fearlessly authentic",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          createdAt: "2023-06-22T22:43:12+05:30",
          firstName: "Adarsh",
          followers: [],
          following: [],
          lastName: "Balika",
          updatedAt: "2023-06-22T22:43:12+05:30",
          username: "adarshbalika",
          _id: "beb17457-5b15-48d0-9891-918732b1a037",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Sagar",
    lastName: "P",
    username: "sagarp",
    createdAt: "2023-05-07T11:25:01+01:40",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    proPic:
      "https://i.pinimg.com/236x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg",
    content: "Trust your creativity",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Aarav",
    lastName: "Parate",
    username: "aaravv",
    createdAt: "2023-06-07T11:25:01+01:40",
    updatedAt: formatDate(),
  },
];
