//Import Images
import volunteerMain from "./img/volunteerMain.jpg";
import forest from "./img/ForestOne.jpg";
import lake from "./img/LakeOne.jpg";
import kindel4kids from "./img/kindel4kids.jpg";
import kindel4kids2 from './img/kindel4kids2.jpg';
import care4kids from './img/care4kids.jpg';
import ancestors from './img/ancestors.jpg';
import weRemember from './img/weRemember.jpg';
import victoryForest from './img/victoryForest.jpg';
import forestTwo from "./img/ForestTwo.jpg";
import lakeTwo from "./img/LakeTwo.jpg";

export const MovieState = () => {
  return [
    {
      title: "Волонтерские акции",
      mainImg: volunteerMain,
      secondImg: kindel4kids,
      thirdImg: kindel4kids2,
      fourthImg: care4kids,
      fifthImg: ancestors,
      sixthImg: weRemember,
      seventhImg: victoryForest,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly masterpiece",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Fresh look on a nature.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Innocence.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
    {
      title: "Explore lakes",
      mainImg: lake,
      url: "/work/good-times",
      secondaryImg: lakeTwo,
      awards: [
        {
          title: "Truly masterpiece",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Fresh look on a nature.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Innocence.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
    {
      title: "Explore forests",
      mainImg: forest,
      url: "/work/the-racer",
      secondaryImg: forestTwo,
      awards: [
        {
          title: "Truly masterpiece",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Fresh look on a nature.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Innocence.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
  ];
};

// const movieStateAction = () => {
//   return 
//     {
//       title: "Explore lakes",
//       mainImg: lake,
//       url: "/work/good-times",
//       secondaryImg: lakeTwo,
//     }
// }