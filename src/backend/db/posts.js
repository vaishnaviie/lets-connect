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
      "https://i.pinimg.com/236x/ba/fe/48/bafe48996a2623214e1fa5b2a3ace837.jpg",
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
      "https://i.pinimg.com/236x/ba/fe/48/bafe48996a2623214e1fa5b2a3ace837.jpg",
    content: "life is beautiful",
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
      "https://i.pinimg.com/236x/bd/3f/02/bd3f023608df1a1f4d6a75f18a1508bb.jpg",
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
      "https://i.pinimg.com/236x/9f/a8/1b/9fa81bf1c1d6eef42f485c63ac4e8e50.jpg",
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
      "https://i.pinimg.com/236x/15/23/c7/1523c7f138b1bb5eb08c75786ebda403.jpg",
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
      "https://i.pinimg.com/236x/3d/59/ad/3d59ad6ca5b2525314e0118ccaf1adab.jpg",
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
      "https://i.pinimg.com/236x/7c/1e/40/7c1e401cf6cf5723082aa5f4fc2e14f7.jpg",
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
