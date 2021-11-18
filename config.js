// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Alex!",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: "Good morning,",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Weather
  weatherKey: "f6e637e34fc902d7bd06cdca768e4763",
  weatherIcons: "OneDark", // 'Nord', 'Dark', 'White'
  weatherUnit: "F", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "26.661060",
  defaultLongitude: "-80.253838",

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: "1",
      name: "GitHub",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Gmail",
      icon: "gmail",
      link: "https://mail.google.com/mail/u/0/",
    },
    {
      id: "3",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "4",
      name: "Twitch",
      icon: "twitch",
      link: "https://twitch.tv/",
    },
    {
      id: "5",
      name: "YouTube",
      icon: "youtube",
      link: "https://www.youtube.com",
    },
    {
      id: "6",
      name: "Reddit",
      icon: "reddit",
      link: "https://reddit.com",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  // firstListIcon: "",
  // secondListIcon: "",

  // Links
  // lists: {
  //   firstList: [
  //     {
  //       name: "Inspirational",
  //       link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //     },
  //     {
  //       name: "Classic",
  //       link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //     },
  //     {
  //       name: "Oldies",
  //       link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //     },
  //     {
  //       name: "Rock",
  //       link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //     },
  //   ],
  //   secondList: [
  //     {
  //       name: "Linkedin",
  //       link: "https://linkedin.com/",
  //     },
  //     {
  //       name: "Figma",
  //       link: "https://figma.com/",
  //     },
  //     {
  //       name: "Dribbble",
  //       link: "https://dribbble.com",
  //     },
  //     {
  //       name: "Telegram",
  //       link: "https://webk.telegram.org",
  //     },
  //   ],
  // },
};
