export class Constants {
  public static GENERAL = {
    GA_TRACKING_ID: "UA-150439015-2",
  };
  public static projectDashboard = [
    {
      id:0,
      projectName:"Network Dashboard",
      iframeURL:"https://analytics.dapplooker.com/public/dashboard/b40e031c-42d1-43e2-84ea-97f07a149a47",
    },
    {
      id:1,
      projectName:"Provider Performance",
      iframeURL:"https://analytics.dapplooker.com/public/dashboard/aae19f0c-5265-4de4-b691-cc19f32465f8"
    },
  ];
  public static URLs = {
    DEV: {
      COOKIE_DOMAIN: "dlooker.com",
      RESTFUL_API_ENDPOINT: "http://dlooker.com:8080",
      ANALYZER: "https://analytics.dapplooker.com:8080/question/new",
      ANALYZER_HOME: "https://analytics.dapplooker.com:8080/",
      ANALYZER_BROWSE: "https://analytics.dapplooker.com/browse/2",
      LOGIN_FOOTERMENU: [
        {
          title: "Privacy",
          link: "http://dlooker.com:8080/privacy",
          target: "_self",
        },
        {
          title: "Integration",
          link: "http://dlooker.com:8080/integration",
          target: "_self",
        },
        {
          title: "Explorer",
          link: "http://dlooker.com:8080/explorer",
          target: "_self",
        },
        {
          title: "Documentation",
          link: "https://docs.dapplooker.com/",
          target: "_blank",
        },
        {
          title: "Blog",
          link: "https://medium.com/dapplooker",
          target: "_blank",
        },
      ],
      LOGOUT_FOOTERMENU: [
        {
          title: "Privacy",
          link: "http://dlooker.com:8080/privacy",
          target: "_self",
        },
        {
          title: "Integration",
          link: "http://dlooker.com:8080/integration",
          target: "_self",
        },
        {
          title: "Explorer",
          link: "http://dlooker.com:8080/explorer",
          target: "_self",
        },
        {
          title: "Documentation",
          link: "https://docs.dapplooker.com/",
          target: "_blank",
        },
        {
          title: "Blog",
          link: "https://medium.com/dapplooker",
          target: "_blank",
        },
        {
          title: "Jobs",
          link: "https://hasjob.co/dapplooker.com",
          target: "_blank",
        },
      ],
    },
    PROD: {
      COOKIE_DOMAIN: "dapplooker.com",
      RESTFUL_API_ENDPOINT: "https://dapplooker.com",
      ANALYZER_CREATE_CHART: "https://analytics.dapplooker.com/question/new",
      ANALYZER_HOME: "https://analytics.dapplooker.com/",
      ANALYZER_BROWSE: "https://analytics.dapplooker.com/browse/2",
      LOGIN_FOOTERMENU: [
        {
          title: "Privacy",
          link: "https://dapplooker.com/privacy",
          target: "_self",
        },
        {
          title: "Integration",
          link: "https://dapplooker.com/integration",
          target: "_self",
        },
        {
          title: "Explorer",
          link: "https://dapplooker.com/explorer",
          target: "_self",
        },
        {
          title: "Documentation",
          link: "https://docs.dapplooker.com/",
          target: "_blank",
        },
        {
          title: "Blog",
          link: "https://medium.com/Dapplooker",
          target: "_blank",
        },
      ],
      LOGOUT_FOOTERMENU: [
        {
          title: "Privacy",
          link: "https://dapplooker.com/privacy",
          target: "_self",
        },
        {
          title: "Integration",
          link: "https://dapplooker.com/integration",
          target: "_self",
        },
        {
          title: "Explorer",
          link: "https://dapplooker.com/explorer",
          target: "_self",
        },
        {
          title: "Documentation",
          link: "https://docs.dapplooker.com/",
          target: "_blank",
        },
        {
          title: "Blog",
          link: "https://dapplooker.medium.com/",
          target: "_blank",
        },
        {
          title: "Jobs",
          link: "https://hasjob.co/dapplooker.com",
          target: "_blank",
        },
      ],
    },
    TWITTER_ID: "dapplooker",
    S3_BASE_URL: "//dapplooker.s3.amazonaws.com",
    // CLOUDFRONT_BASE_URL: "https://duhy7tdvrc6v6.cloudfront.net",
    CLOUDFRONT_BASE_URL: "https://d2yxqfr8upg55w.cloudfront.net", //dapplooker cloundfront url
    DEMO_ANALYTICS_DASHBOARD: "https://dashboard.dapplooker.com/livepeer",
    SOCIAL_NETWORK_TWITTER: "https://twitter.com/dapplooker",
    DISCORD: "https://discord.gg/FWyNJtEyxa",
    MEDIUM_BLOG: "https://dapplooker.medium.com/",
    DOCS: "https://docs.dapplooker.com",
    CALENDLY_URL: "https://calendly.com/dapplooker/schedule",
    ONBOARDING_GOOGLE_FORM: "https://forms.gle/7qe2fGvoXHhWc1Vx9",
    dapplookerDocs: "https://docs.dapplooker.com/",
    JOBS: "https://hasjob.co/dapplooker.com",
    ABOUTUS:
      "https://docs.google.com/presentation/d/1hUxlumY1XNot8FEjDn0CXK9z-5SzWMlqvq258Dzbuq8/edit#slide=id.p",
  };
  public static LABELS = {
    commonLables: {
      feedbackfromCustomers: "Feedback from Customers",
      features: "FEATURES",
      demo: "DEMO",
      explorer: "EXPLORER",
      integration: "INTEGRATION",
      pricing: "PRICING",
      contact: "CONTACT",
      technicalErrorMessage: "There is some technical issue, please try later.",
      termsOfService: "Terms of Service",
      privacy: "Privacy",
      space: "&nbsp;",
      dash: "-",
      FIFTYMB: 50000000, // 50mb
      FIVEMB: 5250000, // 5MB,
      IMAGETYPEALLLOWED: ["png", "jpeg", "jpg"],
      MAINNET: "MAINNET",
      etherscanUrl: "https://etherscan.io/address/",
      SMART_CONTRACT: "SMART_CONTRACT",
      EXTERNAL_SUBGRAPH: "EXTERNAL_SUBGRAPH",
      comingSoon: "COMING SOON",
      needHelpLabel: "NEED HELP?",
      emailNotConfirmedText:
        "Your account is not verified yet. Please check your inbox and verify your email.",
      new: "NEW",
    },
    headerArea: {
      logoText: "Dapplooker",
      headerLink1: "Explorer",
      headerLink2: "Integration",
      headerLink3: "Analyzer",
      headerLink4: "Pricing",
      headerLink5: "Resources",
      headerLink6: "Login",
      headerLink7: "Signup",
      headerLink8: "My Project",
      headerLink9: "Create a Chart",
      headerLink10: "Browse",
      headerLink11: "Features",
      headerLink12: "Browse Data",
      resourceSubHeaderLink1: "Blog",
      resourceSubHeaderLink2: "Documentaion",
      resourceSubHeaderLink3: "Contact Us",
      resourceSubHeaderLink4: "FAQ",
      userLinksSubHeaderLink1: "My Activity",
      userLinksSubHeaderLink2: "Docs",
      userLinksSubHeaderLink3: "Need Help?",
      userLinksSubHeaderLink4: "Logout",
      userLinksSubHeaderLink5: "FAQ",
    },
    banerArea: {
      buildAnalytics: "Query and Share",
      dashboardForDapps: "Dapp Analytics",
      bannerDescription:
        "Connect Smart Contracts, Connect and query your smart contracts, build dashboards to visualize data and share with your community, Build Visual Analytics and Share with Community.",
      getADemo: "Book Demo",
      getStarted: "Get Started",
      subtext2: "Analytics for Everyone",
    },
    featureArea: {
      featureHeader1: "Dashboard for Visualization",
      featureDescription1:
        "Analyze, query and visualize your smart contracts using charts and dashboard. Choose from dozens of chart types to create the best visualization of your data.",
      featureHeader2: "SQL for Advanced Analytics",
      featureDescription2:
        "Enjoy the power and comfort of SQL editor to build complex and advance analytics. Browse schemas and write queries in their natural syntax and build charts.",
      featureHeader3: "Schedule Reports",
      featureDescription3:
        "Easily schedule reports of your charts and dashboards which will be emailed to your inbox. Include multiple charts and dashboards in a single report.",
      featureHeader4: "Share Dashboards with Everyone",
      featureDescription4:
        "We believe in open community. Share dashboards on a URL anywhere you need. Export your charts in popular formats like CSV, XLS and JSON.",
      featureHeader5: "Integrations",
      featureDescription5:
        "dapplooker offers integrations with popular blockchain protocol and networks. Sync all your Dapp data at a single place for powerful analytics. .",
      featureHeader6: "Intuitive Visual SQL editor",
      featureDescription6:
        "Intuitive Visual SQL editor let anyone query, filter and join data for awesome visualizations. It takes the pain out of exploring your data and writes queries for you.",
    },
    madeLifeArea: {
      viewDashboardButton: "CREATE CHARTS",
      grapgQLApiDemoButton: "CREATE DASHBOARD",
      createReportDemoButton: "SCHEDULE REPORT",
      tabOneHeader1: "Create charts with",
      tabOneHeader2: "visual interface",
      tabOneDesc:
        "Browse your smart contract schema and create charts that require joins, multiple stages of filtering and group by methods.",
      tabOneContentButton: "Get Started",
      tabTwoHeader1: "Drag and drop ",
      tabTwoHeader2: "charts to dashboard",
      tabTwoDesc:
        "Group multiple charts to dashboard and arrange them using drag and drop. Share the dashboard with community via public URL.",
      tabTwoContentButton: "Get Started",
      tabThreeHeader1: "Create reports",
      tabThreeHeader2: "from charts",
      tabThreeDesc:
        "Schedule reports and receive regular updates of your charts to keep track of changes to the metrics that matter to you most.",
      tabThreeContentButton: "Get Started",
      modalHeader: "GraphQL Demo",
    },
    priceArea: {
      pricingDescription:
        "Do you need smart contracts advanced analytics for your blockchain project?",
      priceHeader: "Analytics for every blockchain project",
      planRibbon: "Advanced",
      currencySign: "$",
      planName1: "Free",
      planName2: "Business",
      planName3: "Ultimate",
      price1: "0",
      price2: "199",
      price3: "299",
      durationUnit: "Month",
      freeSignUp: "SIGNUP FREE",
      freeFeature1: "Create charts and dashboards.",
      freePlanFeatures: [
        {
          freeFeature: "Keep data history for 6 months.",
          infoIcon: false,
          infoDetails: ``,
        },
        {
          freeFeature: "Connect upto 1 project(smart contract/subgraph).",
          infoIcon: true,
          infoDetails: `Please follow <a class="info-link" href="https://docs.dapplooker.com/dapp-registration/register-dapp-using-subgraph" target="_blank">dapp registration</a> documentation for details.`,
        },
        {
          freeFeature: "Support on discord and email.",
          infoIcon: false,
          infoDetails: ``,
        },
        {
          freeFeature: "Public dashboards.",
          infoIcon: true,
          infoDetails: `Open <a class="info-link" href="https://dapplooker.com/explorer" target="_blank">explorer</a> to view public dashboarads.`,
        },
        {
          freeFeature: "Analysis on current and historical token pricing.",
          infoIcon: true,
          infoDetails: `Please follow <a class="info-link" href="https://docs.dapplooker.com/dataset/historical-token-pricing" target="_blank">historical token pricing</a> documentation for details.`,
        },
        {
          freeFeature: "Build your dashboard by data scientist.",
          infoIcon: true,
          infoDetails: `Please follow <a class="info-link" href="https://docs.dapplooker.com/dataset/" target="_blank">historical token pricing</a> documentation for details.`,
        },
        {
          freeFeature: "Priority Dapp Syncing for faster data syncing.",
          infoIcon: true,
          infoDetails: `Please follow <a class="info-link" href="https://docs.dapplooker.com/dataset/" target="_blank">historical token pricing</a> documentation for details.`,
        },
        {
          freeFeature: "Factory smart contracts decoding and support.",
          infoIcon: true,
          infoDetails: `Please follow <a class="info-link" href="https://docs.dapplooker.com/dataset/" target="_blank">historical token pricing</a> documentation for details.`,
        },
      ],
      customFeature1: "All of the Free plan features, plus",
      proPlanFeatures: [
        {
          customFeature: "Connect upto 2 projects.",
          infoIcon: true,
          infoDetails: `Please follow <a class="info-link" href="https://docs.dapplooker.com/dapp-registration/register-dapp-using-smart-contract" target="_blank">dapp registration</a> documentation for details.`,
        },
        {
          customFeature: "Build your dashboard by data scientist.",
          infoIcon: true,
          infoDetails: `A data scientist will be assigned to your project. He will help you build you charts and dashboard for your Dapp.`,
        },
        {
          customFeature: "Priority Dapp Syncing for faster data syncing.",
          infoIcon: true,
          infoDetails: `Your Dapp will be added as priority Dapp. This enables faster data syncing.`,
        },
        {
          customFeature: "Factory smart contracts decoding and support.",
          infoIcon: false,
          infoDetails: ``,
        },
        {
          customFeature:
            "Priority support on private discord & email. Skip queue.",
          infoIcon: false,
          infoDetails: ``,
        },
        {
          customFeature: "User retention and cohort analytics.",
          infoIcon: false,
          infoDetails: ``,
        },
      ],
      priceButton: "TRY FOR FREE",
      contactButton: "CONTACT US",
      freeTrail: "7 day free trial",
      premiumFeature1: "All of the Pro plan features, plus",
    },

    footerArea: {
      footerHeader1: "Our Mission",
      loggedInfooterHeader1: "Join Us",
      footerDescription1:
        "We aim to empower everyone to easily understand smart contract data, do analytics and easily build beautiful charts and dashboards.",
      copyright1: "Copyright",
      copyright2: "Dapplooker Inc",
      copyright3: ". All rights reserved",
      footerHeader2: "Our Newsletter",
      footerDescription2:
        "Join our mailing list and stay updated with technology updates, community resources and more!",
      emailValidationErrorMsg:
        "Ahh...Invalid Email. Please enter correct email id.",
      footerHeader3: "Join us",
      termsAndCondition: "Terms And Condition",
      privacyPolicy: "Privacy Policy",
      allRightsReservedText1: "2020 Dapplooker Inc.",
      allRightsReservedText2: "- All Rights Reserved",
      link1: "Home",
      link2: "Integration",
      link3: "Explorer",
      link4: "Features",
      link5: "Privacy policy",
      link6: "FAQ",
      link7: "Integration",
      link8: "Browse",
      link9: "About Us",
      service1: "Blog",
      service2: "Contact",
      service3: "Privacy",
      service4: "Jobs",
      service5: "Graphic Design",
    },
    termsOfService: {
      termsOfServiceHeader: "TERMS OF SERVICE",
    },
    privacy: {
      privacyPolicy: "Privacy Policy",
    },
    errorPage: {
      errorCode: "404",
      errorMsg: "OOPS! we are sorry, but the page you requested was not found",
      goHome: "GO HOME",
      contactUs: "CONTACT US",
    },




    errorMessages: {
      email: "Please enter correct email",
      name: "please enter a correct name",
      password: "Password is too short, length must be minimum 8 characters",
      loginPagePassword: "Please enter correct passoword",
      termsAndCondition:
        "Please check the terms and condition checkbox to proceed",
      formInvalid: "Please complete the form",
      technicalError: "There is some technical issue",
      inValidContractAddress:
        "Invalid contract address, Please add a valid contract address.",
      contractAddressExists: "contract address already exists.",
      errorCode: "404",
      errorMsg: "OOPS! we are sorry, but the page you requested was not found",
      goHome: "GO HOME",
      contactUs: "CONTACT US",
      inValidUrl: "Invalid URL",
      projectName: "please enter a correct project name",
      invalidProtocol: "please select a protocol",
      invalidNetwork: "please select a network",
      NoContractAddressAdded: "add atleast one contract address.",
      fileSizeMax5Mb: "File size exceeds limit, maximum 5 MB allowed",
      fileSizeMax50Mb: "File size exceeds limit, maximum 50 MB allowed",
      allowedImageType: "only image(PNG, JPEG, JPG) are allowed",
      allowedAbisFileTypeMsg: "only json file allowed",
      invalidSubgraphEndpoint: "invalid Subgraph Endpoint",
  },
    contactUs: {
      header: "Get In Touch",
      emailTitle: "Email:",
      discordTitle: "Discord:",
      emailAddress: "help@dapplooker.com",
      discordUserName: "@Dapplooker",
      formFieldName: "Your Name",
      formFieldEmail: "Your Email",
      formFieldSubject: "Subject",
      formFieldMessage: "Message",
      formFieldSentMsg: "Your message has been sent. Thank you!",
      formFieldLoading: "Loading..",
      formFieldSubmitTitle: "Send Message",
      scheduleMeeting: "Schedule Meeting",
    },
  }

  public static patterns = {
    numberValidator: /^[0-9]*$/,
    onlyTextWithoutSpace: /[a-zA-Z]+([\s][a-zA-Z]+)*/,
    email:
      /^[A-Z0-9]+[A-Z0-9_%+-]*(\.[A-Z0-9_%+-]{1,})*@(?:[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?\.)+[A-Z]{2,24}$/i,
    website:
      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]*.[a-z0-9]+\.[a-z/]+(\/[-_a-zA-Z0-9#]+\/?)*$/,
  };
}
