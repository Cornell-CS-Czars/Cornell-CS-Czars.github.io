// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-czarships",
          title: "czarships",
          description: "Current departmental czarships",
          section: "Navigation",
          handler: () => {
            window.location.href = "/czarships/";
          },
        },{id: "nav-czars",
          title: "czars",
          description: "Current departmental czars",
          section: "Navigation",
          handler: () => {
            window.location.href = "/czars/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-pldg-czar",
          title: 'PLDG czar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PLDG/";
            },},{id: "projects-colloquium-czar",
          title: 'Colloquium czar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/colloquium/";
            },},{id: "projects-czar-czar",
          title: 'Czar czar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/czar/";
            },},{id: "projects-fellowships-czar",
          title: 'Fellowships czar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fellowships/";
            },},{id: "projects-lgbtea-czar",
          title: 'LGBTea czar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lgbtea/";
            },},{id: "projects-mentoring-czar",
          title: 'Mentoring czar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mentoring/";
            },},{id: "projects-picnic-czar",
          title: 'Picnic czar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/picnic/";
            },},{id: "projects-programming-contest-czar",
          title: 'Programming contest czar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/programming/";
            },},{id: "projects-quotes-czar",
          title: 'Quotes czar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quotes/";
            },},{id: "projects-room-reservation-czar",
          title: 'Room reservation czar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/room_reservation/";
            },},{id: "projects-social-hour-czar",
          title: 'Social hour czar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/social_hour/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
