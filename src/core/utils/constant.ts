
export class Constants {
  public static GENERAL = {
    GA_TRACKING_ID: "UA-150439015-2",
  };

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

  public static testimonyArray = [
    {
      customerName: "Bedeho Mender",
      customerPosition: "Joystream CEO",
      customerDescription:
        "I check our Dapplooker dashboard every few hours every day, it's simply the fastest way for me to understand what users are doing on our blockchain at any given time.",
      customerImgUrl:
        "https://dapplooker.s3.amazonaws.com/assets/img/Bedeho_joystream_ceo.png",
    },
    // {
    //   customerName: "Auryn Macmillan",
    //   customerPosition: "Community Builder",
    //   customerDescription:
    //     "The Dapplooker team were a breeze to work with. They turned out a production ready dashboard for the Colony Network in a matter of days and have been constantly improving it ever since.",
    //   customerImgUrl:
    //     "https://duhy7tdvrc6v6.cloudfront.net/assets/img/auryn.jpg",
    // },
    // {
    //   customerName: "Test 2",
    //   customerPosition: "Community Builder",
    //   customerDescription:
    //     "The Dapplooker team were a breeze to work with. They turned out a production ready dashboard for the Colony Network in a matter of days and have been constantly improving it ever since.",
    //   customerImgUrl:
    //     "https://tertonfc.com/wp-content/uploads/2021/03/player.jpg",
    // },
    // {
    //   customerName: "Auryn Macmillan",
    //   customerPosition: "Community Builder",
    //   customerDescription:
    //     "The Dapplooker team were a breeze to work with. They turned out a production ready dashboard for the Colony Network in a matter of days and have been constantly improving it ever since.",
    //   customerImgUrl:
    //     "https://duhy7tdvrc6v6.cloudfront.net/assets/img/auryn.jpg",
    // },
  ];

  public static explorerList = [
    "popular",
    "defi",
    "governance",
    "games",
    "other",
    "nft",
  ];
  public static featureList = [
    "dashboard",
    "explorer",
    "integration",
    "privacy",
    "/",
  ];

  public static integrationItemList = [
    "ens",
    //'ipfs',
    "coinmarketcap",
    "etherscan",
    "graphprotocol",
    "ethereum",
    "poa",
    "xdai",
    "thegraphnetwork",
    "polygon",
    "fantom",
    "priceoracle",
    "coingecko",
    "joystream",
    "bitcanna",
    "moonbeam",
  ];


  public static constValues = {
    general: {
      passwordStrengthColorArray: [
        "#e7003b",
        "#ff7a00",
        "#e6e664",
        "#a7d646",
        "#73a017",
      ],
      left: "left",
      right: "right",
      center: "center",
    },
  };

  public static dapplookerPartners = [
    {
      title: "AWS Activate",
      iconUrl: `${Constants.URLs.CLOUDFRONT_BASE_URL}/assets/img/awsActivate_image.png`,
      isActive: true,
      navigateTo: "https://aws.amazon.com/activate/",
    },
    {
      title: "Moonbeam",
      iconUrl: `${Constants.URLs.CLOUDFRONT_BASE_URL}/assets/img/moonbeam_image.png`,
      isActive: true,
      navigateTo: "https://moonbeam.network/",
    },
    {
      title: "Joystream",
      iconUrl: `${Constants.URLs.CLOUDFRONT_BASE_URL}/assets/img/joystream_image.png`,
      isActive: true,
      navigateTo: "https://www.joystream.org/",
    },
  ];

  public static faqArr = [
    {
      faqid: 1,
      faq: "What are different pricing plans?",
      faqAns:
        "We have three types of plans. These are free plan, standard plan and premium plan. For pricing details of these plans we request you to contact our support team at <a href='mailto:help@dapplooker.com'>help@dapplooker.com</a>. There is 20% discount on yearly plans.",
    },
    {
      faqid: 2,
      faq: "When does the pricing plan expire?",
      faqAns:
        "Pricing plan expires after one year. You can renew your plan after duration of 1 year.",
    },
    {
      faqid: 3,
      faq: "What is the data syncing frequency for different pricing plans",
      faqAns:
        "<br/><b>Free plan:</b> It's on shared infra. Syncing is done 2 times a day.<br/><b>Standard plan:</b> Syncing is done every 4 hours.<br/><b>Premium plan:</b> Data syncing is done every 1 hour.",
    },
    {
      faqid: 4,
      faq: "Is there an option to opt for a monthly subscription rather than a yearly one?",
      faqAns: "Yes, you can choose monthly standard and premium plans.",
    },
    {
      faqid: 5,
      faq: "How can I cancel my subscription?",
      faqAns:
        "You can send email to support@dapplooker.com for cancellation of monthly or yearly subscriptions.",
    },
    {
      faqid: 6,
      faq: "Where can I see my billing details and history?",
      faqAns:
        "After you select paid pricing plans, you will get invoice for the same. We use request.network for invoicing.",
    },
    {
      faqid: 7,
      faq: "How can I get invoice?",
      faqAns:
        "We use <a href='http://request.network/' target='_blank'>request.network</a> for invoicing. All the invoices are sent through this platform.",
    },
    {
      faqid: 8,
      faq: "Can multipe account login to single account?",
      faqAns:
        "Yes multiple login can login to single account. Multiple users of same account can share same collection of charts and dashboards. The collection is editable only by the account users.",
    },
    {
      faqid: 9,
      faq: "Do you support non verified etherscan or blockscout contracts?",
      faqAns:
        "Yes we support non verified contracts. You can upload ABIs of contracts which are not verifed on etherscan or blockscout.",
    },
    {
      faqid: 10,
      faq: "‌Does token pricing data of different networks like Polygon, Binance are supported?",
      faqAns:
        "Yes token pricing for different networks are supported. Networks include Ethereum, Polygon, Binance, Fantom, xDai.",
    },
  ];
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
      premiumPlanFeatures: [
        // {
        //     premiumFeature: 'Connect upto 5 projects.',
        //     infoIcon: true,
        //     infoDetails: `Please follow <a class="info-link" href="https://docs.dapplooker.com/dapp-registration/register-dapp-using-smart-contract" target="_blank">dapp registration</a> documentation for details.`
        // },
        {
          premiumFeature: "User retention and cohort analytics.",
          infoIcon: true,
          infoDetails: `Please follow <a class="info-link" href="https://docs.dapplooker.com/data-pipeline/cohort-analysis-and-user-retention-analysis" target="_blank">user retention and cohort analytics</a> documentation for details.`,
        },
        {
          premiumFeature: "Host dashboard on custom domain or subdomain.",
          infoIcon: true,
          infoDetails: `Please see <a class="info-link" href="https://thegraph.dapplooker.com/" target="_blank">TheGraph network dashboard</a> hosted on custom domain.`,
        },
        {
          premiumFeature: "Export data in your database.",
          infoIcon: true,
          infoDetails: `Please follow <a class="info-link" href="https://docs.dapplooker.com/data-pipeline/sync-dapp-dataset-in-your-database" target="_blank">data pipeline</a> documentation for details.`,
        },
        {
          premiumFeature: "Priority Dapp Syncing for faster data syncing.",
          infoIcon: true,
          infoDetails: `Your Dapp will be added as priority Dapp. This enables faster data syncing.`,
        },
        {
          premiumFeature:
            "Priority support on private discord & email. Skip queue.",
          infoIcon: false,
          infoDetails: ``,
        },
        // {
        //     premiumFeature:
        //         'Analytics on historical snaphot of smart contract data.',
        //     infoIcon: false,
        //     infoDetails: ``
        // }
      ],
      monthlyPlan: {
        monthlyPlanAmount: 199,
        yearlyPlanAmount: 1999,
      },
      yearlyPlan: {
        monthlyPlanAmount: 299,
        yearlyPlanAmount: 2999,
      },
    },
    contactArea: {
      contactPageHeader: "GET IN TOUCH",
      formSuccessMessage:
        "Thank you for contacting us. Our support representative will contact you soon.",
      supportEmail: "help@dapplooker.com",
      supportDescription:
        "Contact us for question, demo and premium solutions!",
      nameValidationErrorMessage: `Come on, you have a name, don't you?`,
      emailValidationErrorMessage: "Oops..!! Please enter a correct email.",
      subjectValidationErrorMessage: `Come on, you have a subject, don't you?`,
      bodyValidationErrorMessage:
        "Please enter valid message with more than 50 characters!",
      contactButton: "Send Message",
      minBodySize: "50",
      newCustomerEnquiry: "New Customer Enquiry",
      supportCase: "Support Case",
      billing: "Billing",
      feedbackAndFeaturesRequest: "Feedback & Features Request",
      others: "Others",
      header: "Get In Touch",
      emailTitle: "Email:",
      discordTitle: "Discord:",
      emailAddress: "help@dapplooker.com",
      discordUserName: "https://discord.gg/FWyNJtEyxa",
      formFieldName: "Your Name",
      formFieldEmail: "Your Email",
      formFieldSubject: "Subject",
      formFieldMessage: "Message",
      formFieldSentMsg: "Your message has been sent. Thank you!",
      formFieldLoading: "Loading..",
      formFieldSubmitTitle: "Send Message",
      scheduleMeeting: "Schedule Meeting",
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
    loginForm: {
      loginToappquery: "Login to Dapplooker",
      emailAddress: "EMAIL ADDRESS",
      password: "PASSWORD",
      forgotPassword: "Forgot Password?",
      login: "Login",
      createAnAccount: "Create an account",
      featureList: [
        {
          icon: "starIcon",
          msg: '<span class="bold">Connect smart contract or subgraph</span> and make data driven decisions.',
        },
        {
          icon: "chart",
          msg: '<span class="bold">Analyze, query and visualize</span> your Dapp with <span class="bold">"Visual SQL"</span>.',
        },
        {
          icon: "protocolIcon",
          msg: 'Query <span class="bold">multiple protocols & networks</b> like Polygon, Ethereum, Subgraph, Covalent in a single interface.</span>',
        },
        {
          icon: "dashboard",
          msg: '<span class="bold">Share charts, dashboards</span> for seamless collaboration.',
        },
        {
          icon: "datasetIcon",
          msg: 'Analytics on <span class="bold">price oracle dataset.</span>',
        },
        {
          icon: "queryExecutionIcon",
          msg: '<span class="bold">Write high performance effective SQL</span> queries.',
        },
      ],
    },
    signupForm: {
      name: "NAME",
      emailAddress: "EMAIL ADDRESS",
      password: "PASSWORD",
      signupHeader: "Signup to Dapplooker",
      termsAndConditionMsg:
        "By checking this box, you agree to our Terms of Service and acknowledge and consent to our",
      policyLink: "Acceptable Use Policy",
      privacyMsg: "Privacy Policy",
      signup: "Signup",
      capitalSignup: "SIGNUP FREE",
      loginUrlMsg: "I have an account",
      featureList: [
        {
          icon: "starIcon",
          msg: '<span class="bold">Connect smart contract or subgraph</span> and make data driven decisions.',
        },
        {
          icon: "chart",
          msg: '<span class="bold">Analyze, query and visualize</span> your Dapp with <span class="bold">"Visual SQL"</span>.',
        },
        {
          icon: "protocolIcon",
          msg: 'Query <span class="bold">multiple protocols & networks</b> like Polygon, Ethereum, Subgraph, Covalent in a single interface.</span>',
        },
        {
          icon: "dashboard",
          msg: '<span class="bold">Share charts, dashboards</span> for seamless collaboration.',
        },
        {
          icon: "datasetIcon",
          msg: 'Analytics on <span class="bold">current and historical cryptocurrencies dataset.</span>',
        },
        {
          icon: "queryExecutionIcon",
          msg: '<span class="bold">Write high performance effective SQL</span> queries.',
        },
      ],
    },
    forgetPassword: {
      emailAddress: "EMAIL ADDRESS",
      recover: "Recover",
      returnToLogin: "Return to Login",
      message:
        "Enter your email address to receive the link to reset your password",
      forgetPassword: "Forgot Password",
      emailSentMsg1:
        "We have sent password recovery instructions to your email",
      emailSentMsg2:
        "Please check your spam folder if your email doesn’t arrive soon",
    },
    resetPassword: {
      resetPasswordHeader: "Reset Your Password",
      resetPasswordMsg1: "Enter your new password.",
      enterPassword: "ENTER PASSWORD",
      resetPassword: "Reset Password",
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
    registerDappForm: {
      warningMsg1:
        "If you update contract, protocol, network or factory option, system will delete your data and start syncing again.",
      warningMsg2: "Do you want to continue?",
      header: "Just A Step Away",
      subHeader: "Few more details needed to get you started",
      viewModeHeader: "Your Project Details",
      projectName: "Project Name",
      projectNameTooltipMsg:
        "Your dapp/contract name by which your project is known by your users e.g. Compound, Uniswap.",
      protocol: "Platform",
      protocolTooltipMsg:
        "Please select blockchain platform where your project contracts are deployed.   ",
      network: "Network",
      networkTooltipMsg:
        "Please select mainnet/testnet network where your project contracts are deployed.",
      contractAddress: "Contract Addresses",
      contractTooltipMsg:
        "Search one or more contract addresses of your project which emit events. Works best with event data.",
      subgraphEndpointTooltipMsg:
        "You can get your subgraph http query endpoint from TheGraph explorer: https://thegraph.com/explorer/",
      protocolDropdownPlaceholder: "Select protocol",
      networkDropdownPlaceholder: "Select network",
      website: "Please enter your website",
      uploadLogo: "Please upload your logo",
      uploadLogoTooltipMsg:
        "Supported image types: png,jpg,jpeg. Project logo will be used in dashboard header for branding. Recommended size: 300x300",
      contractsLoadingMsg: "contracts loading...",
      noContractsFound:
        "No matching contracts found. Please click + icon and upload ABI.",
      register: "Register",
      clickToUpload: "Click to upload",
      uploadAbisFileForNonVerifiedContract:
        "Please add Abis file for all non verified contracts",
      uploadLogoForViewMode: "your uploaded logo",
      viewLogo: "View Logo",
      contractAddressPlaceholder:
        "Enter contract name or address(minimum 2 characteres)",
      websitePlaceholder: "Please enter your website",
      projectNamePlaceholder: "Enter your project name",
      clickToOpen: "Click to view contract details in explorer",
      selectPlatform: "Select platform",
      protipHeader: "ProTips!",
      tip1: "You can get your project contract addresses from the block explorers like <b>Etherscan</b>.",
      tip2: 'You can just type in the name/address of the contract in "CONTRACT ADDRESS" field and it will be auto-populated.',
      tip3: 'We also support "FACTORY CONTRACT" which deploys many instances of same contract with the same bytecode.',
      tip4: "Follow <a href='https://docs.dapplooker.com/dapp-registration/register-dapp-using-smart-contract' target='_blank'>documentation</a> for step by step guide.",
      connectSubgraphTip1:
        'Go to <a href="https://thegraph.com/explorer" target=_blank>TheGraph explorer<a>. Copy the api endpoint from your dApp subgraph and paste in "SUBGRAPH ENDPOINT" textbox.',
      connectSubgraphTip2:
        "We recommend to update subgraph with latest Dapp logic. Subgraph data is pulled in regular intervals. So your dashboard is always up to date.",
      connectSubgraphTip3:
        "Any changes in subgraph schema will be applied in next run.",
      connectSubgraphTip4:
        "Follow <a href='https://docs.dapplooker.com/dapp-registration/register-dapp-using-subgraph' target='_blank'>documentation</a> for step by step guide.",
      dynamicSourcePointTooltipMsg:
        "If there are many instances of the same contract with the same bytecode we can detect and put them all in the same table. Often relevant when a factory deploys contracts.",
      dynamicDataSourceTitle: "Several instances of same contract?",
      backToProjects: "BACK TO PROJECTS",
    },
    loggedInDashboard: {
      msg1: "Data syncing process has started.",
      msg2: "It can take anywhere between few minutes to few hours for the process to complete.",
      msg3: "We will email you at ",
      msg4: " as the data syncing is complete.",
      msg5: "Meanwhile you can browse charts and start analytics on popular blockchain projects.",
      msg6: "Looks like you don't have any Dapp connected at the moment, click on Connect Dapps to get started.",
      editMode: 1,
      viewMode: 0,
      heading: "Analyze Your Smart Contract",
      createChart: "Create a Chart",
      connectDapp: "Connect Dapp",
      connectSubgraph: "Connect Subgraph",
      connectSmartContract: "Connect Smart Contract",
      browseData: "Browse Data",
      viewCollection: "View Collection",
    },
    userHeader: {
      dappDetails: "DAPP DETAILS",
      contactUs: "HELP",
      logout: "LOGOUT",
      sendQueries: "Please send your queries...",
      dashboard: "MY PROJECT",
      myActivity: "MY ACTIVITY",
      docs: "DOCS",
      analyzeLabel: "ANALYZE",
      myProject: "MY PROJECT",
      integrationLabel: "INTEGRATION",
      explorerLabel: "EXPLORER",
      createChart: "CREATE CHART",
      browseData: "BROWSE DATA",
    },
    verifyEmail: {
      header: "Verify Email",
      returnToLogin: "Return to Login",
      message: "Your email has been verified successfully.",
      emailNotVarifiedmessage: "URL is broken or expired.",
    },
    integrationDetailsPage: {
      tryItFree: "Try it free",
      emailValidationErrorMsg:
        "Ahh...Invalid Email. Please enter correct email id.",
      featureHeader: "Features + Benefits",
      ensLabel: "ens",
      ipfsLabel: "ipfs",
      coinmarketcapLabel: "coinmarketcap",
      etherscanLabel: "etherscan",
      graphprotocolLabel: "graphprotocol",
      ethereumLabel: "ethereum",
      poaLabel: "poa",
      ethereum: {
        title: "Ethereum",
        name: "ethereum",
        description:
          "Analyze, Query and Visualize Ethereum Smart Contracts with Dapplooker",
        para1: `Easily analyze & visualize your ethereum smart contract data in various formats and gather it into dashboards from multiple sources. Analyze your data with <b>intuitive Visual SQL editor </b>which writes queries for you.
                Share the story your data tells with your team or with your community.
                <b>Share dashboard</b> insights via URL wherever you need to make your organization truly data driven.
                `,
        para2: `Supported ethereum networks:<b> Mainnet</b>. You can blend multiple blockchain protocols like <b>IPFS, ENS etc.</b> in one chart and create powerful dashboards that can be shared across your organization for seamless collaboration.
        Find resources to analyze and query ethereum data with Visual SQL editor.<br/>
        <a href='https://analytics.dapplooker.com/browse/2' target=_blank>Browse Ethereum Dapps DataSet</a><br/>
        <a href='https://analytics.dapplooker.com/collection/15' target=_blank>Browse Charts & Dashboards</a>`,
        para3: `Please find resources to query and analyze smart contract data with Visual SQL: <a href='https://docs.dapplooker.com/dapp-registration/register-dapp-using-smart-contract' target=_blank>Connect Smart Contract Documentation & Resources</a>`,
        feature1: `Browse your data with Visual SQL or switch to SQL mode to review the code under the hood.`,
        feature2: `Monitor your Dapp growth with weekly/monthly/yearly volume queries and take data driven decisions.`,
        feature3: `Auto updating charts & dashboards which is in sync with new data produced.`,
        feature4: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-smart-contract/",
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      graphprotocol: {
        title: "Subgraph",
        name: "graphprotocol",
        description:
          "Analyze, Query and Visualize Subgraph Open Apis with Dapplooker",
        para1: `Easily analyze & visualize your subgraph data in various formats and gather it into dashboards from multiple sources. Analyze your data with <b>intuitive Visual SQL editor </b>which writes queries for you.
                Share the story your data tells with your team or with your community.
                <b>Share dashboard</b> insights via URL wherever you need to make your organization truly data driven.`,
        para2: `Dapplooker is the perfect complement to <b>Subgraph open APIs</b> by helping you make sense of subgraph entities without having to rely on an engineer or analyst.<br/>
          Find resources to analyze and query Subgraph data with Visual SQL editor.<br/>
          <a href='https://analytics.dapplooker.com/browse/2' target=_blank>Browse Subgraph DataSet</a><br/>`,
        para3: `Please find resources to query and analyze Subgraph data with Visual SQL: <a href='https://docs.dapplooker.com/dapp-registration/register-dapp-using-subgraph' target=_blank>Connect Subgraph Documentation & Resources</a>`,
        feature1: `Run join, group-by, filter SQL queries on subgraph entities`,
        feature2: `Browse your data with Visual SQL or switch to SQL mode to review the code under the hood.`,
        feature3: `Auto updating charts & dashboards which is in sync with latest subgraph entity data.`,
        feature4: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-subgrabh/",
        isSmartContract: false,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      xdai: {
        title: "XDai",
        name: "xdai",
        description:
          "Analyze, Query and Visualize xDai Smart Contracts with Dapplooker",
        para1: `Easily analyze & visualize your xDai smart contract data in various formats and gather it into dashboards from multiple sources. Analyze your data with <b>intuitive Visual SQL editor </b>which writes queries for you.
              Share the story your data tells with your team or with your community.
              <b>Share dashboard</b> insights via URL wherever you need to make your organization truly data driven.`,
        para2: `Dapplooker is the perfect complement to xDai network by helping you make sense of xDai smart contracts without having to rely on an engineer or analyst.<br/>
          Find resources to analyze and query xDai data with Visual SQL editor.<br/>
          <a href='https://analytics.dapplooker.com/browse/2' target=_blank>Browse xDai Dapps DataSet</a><br/>
          <a href='https://analytics.dapplooker.com/collection/13' target=_blank>Browse Charts & Dashboards</a>`,
        para3: `Find below popular xDai dashboards:<br/> <a target=_blank href='https://dapplooker.com/dapp/dark-forest-10058'>Dark Forest Leaderboard</a><br/><a target=_blank href='https://dapplooker.com/dapp/omnibridge-10019'>xDai Tokenbridge dashboard</a>`,
        feature1: `Browse your data with Visual SQL or switch to SQL mode to review the code under the hood.`,
        feature2: `Monitor your Dapp growth with weekly/monthly/yearly volume queries and take data driven decisions.`,
        feature3: `Auto updating charts & dashboards which is in sync with new data produced.`,
        feature4: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-smart-contract/",
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      poa: {
        title: "POA ",
        name: "poa",
        description:
          "Analyze, Query and Visualize POA Smart Contracts with Dapplooker",
        para1: `Easily analyze & visualize your POA smart contract data in various formats and gather it into dashboards from multiple sources. Analyze your data with <b>intuitive Visual SQL editor </b>which writes queries for you.
            Share the story your data tells with your team or with your community.
            <b>Share dashboard</b> insights via URL wherever you need to make your organization truly data driven.`,
        para2: `Supported POA networks: <b>POA-Core, POA Sokol</b>. You can blend multiple blockchain protocols like <b>IPFS, ENS etc.</b> in one chart and create powerful dashboards that can be shared across your organization for seamless collaboration.`,
        feature1: `Browse your data with Visual SQL or switch to SQL mode to review the code under the hood.`,
        feature2: `Monitor your Dapp growth with weekly/monthly/yearly volume queries and take data driven decisions.`,
        feature3: `Auto updating charts & dashboards which is in sync with new data produced.`,
        feature4: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-smart-contract/",
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      ens: {
        title: "ENS",
        name: "ens",
        description: "Analyze, Query and Visualize ENS Data with Dapplooker",
        para1: `Easily analyze & visualize ENS domain data in various formats and gather it into dashboard from multiple sources.
              ENS integration help you with below use cases:
              <br/>1) You can <b>query for an ethereum/contract</b> address and find it's ENS domain name.
              <br/>2) You can <b>query and filter a ENS domain</b> and find it's respective ethereum/contract address.`,
        para2: `Blend <b>sma    faq: {
          header: "Frequently Asked Questions",
          faq1: "What are different pricing plans?",
          faq1Ans:
            "We have three types of plans. These are free plan, standard plan and premium plan. For pricing details of these plans we request you to contact our support team at <a href='mailto:help@dapplooker.com'>help@dapplooker.com</a>. There is 20% discount on yearly plans.",
          faq2: "When does the pricing plan expire?",
          faq2Ans:
            "Pricing plan expires after one year. You can renew your plan after duration of 1 year.",
          faq3: "What is the data syncing frequency for different pricing plans",
          faq3Ans:
            "<br/><b>Free plan:</b> It's on shared infra. Syncing is done 2 times a day.<br/><b>Standard plan:</b> Syncing is done every 2 hours.<br/><b>Premium plan:</b> Data syncing is done every 30 minutes.",
          faq4: "Is there an option to opt for a monthly subscription rather than a yearly one?",
          faq4Ans: "Yes, you can choose monthly standard and premium plans.",
          faq5: "How can I cancel my subscription?",
          faq5Ans:
            "You can send email to support@dapplooker.com for cancellation of monthly or yearly subscriptions.",
          faq6: "‌Where can I see my billing details and history?",
          faq6Ans:
            "After you select paid pricing plans, you will get invoice for the same. We use request.network for invoicing.",
          faq7: "‌How can I get invoice?",
          faq7Ans:
            "We use <a href='http://request.network/' target='_blank'>request.network</a> for invoicing. All the invoices are sent through this platform.",
          faq8: "‌Can multipe account login to single account?",
          faq8Ans:
            "Yes multiple login can login to single account. Multiple users of same account can share same collection of charts and dashboards. The collection is editable only by the account users.",

        }rt contract + ENS </b> data in one chart and create powerful dashboards that can be shared for seamless collaboration.`,
        para3: `Please find resources to analyze and query ENS data with "Visual SQL".
        <br/>
        <a href='https://docs.dapplooker.com/projects-and-dapps/ens' target=_blank>ENS Documentation & Resources</a>
        <br/>
        <a href='https://dapplooker.com/dapp/ens-10060' target=_blank>ETHGlobal Award Winner ENS Dashbaord</a>`,
        feature1: `Browse your data with Visual SQL or switch to SQL mode to review the code under the hood.`,
        feature2: `Monitor your Dapp growth with weekly/monthly/yearly volume queries and take data driven decisions.`,
        feature3: `Auto updating charts & dashboards which is in sync with new data produced.`,
        feature4: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-smart-contract/",
        isSmartContract: true,
        isSubgraph: false,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      ipfs: {
        title: "IPFS",
        name: "ipfs",
        description:
          "Analyze, Query and Visualize Ethereum Smart Contract Data with Dapplooker",
        para1: `   When you connect your Zoom account with Calendly, video conferencing is made simple. Choosing Zoom as your
            event location will automatically create video conference details and save them to your Calendly event. Providing
            your invitees instant access to these details will save you time and help reduce meeting no-shows.`,
        para2: `Once an event is scheduled, the Zoom details will be automatically included in the confirmation
            notifications
            and calendar event sent to your invitees.`,
        feature1: `Automatically generate unique Zoom video conference details for every meeting you
            schedule.`,
        feature2: `Eliminate the need to set up and remember video conferencing details for all your
            meetings.`,
        feature3: `Have meeting details update in real time when rescheduling or canceling.`,
        signupDescription: `Requires Zoom trial or subscription`,
        pageRedirectTo: "/connect-subgrabh/",
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      coinmarketcap: {
        title: "Coinmarketcap",
        name: "Coinmarketcap",
        description:
          "Analyze, Query and Visualize Ethereum Smart Contract Data with Dapplooker",
        para1: `   When you connect your Zoom account with Calendly, video conferencing is made simple. Choosing Zoom as your
              event location will automatically create video conference details and save them to your Calendly event. Providing
              your invitees instant access to these details will save you time and help reduce meeting no-shows.`,
        para2: `Once an event is scheduled, the Zoom details will be automatically included in the confirmation
              notifications
              and calendar event sent to your invitees.`,
        feature1: `Automatically generate unique Zoom video conference details for every meeting you
              schedule.`,
        feature2: `Eliminate the need to set up and remember video conferencing details for all your
              meetings.`,
        feature3: `Have meeting details update in real time when rescheduling or canceling.`,
        signupDescription: `Requires Zoom trial or subscription`,
        pageRedirectTo: "/connect-subgrabh/",
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      etherscan: {
        title: "Etherscan",
        name: "etherscan",
        description:
          "Analyze, Query and Visualize Ethereum Smart Contract Data with Dapplooker",
        para1: `   When you connect your Zoom account with Calendly, video conferencing is made simple. Choosing Zoom as your
              event location will automatically create video conference details and save them to your Calendly event. Providing
              your invitees instant access to these details will save you time and help reduce meeting no-shows.`,
        para2: `Once an event is scheduled, the Zoom details will be automatically included in the confirmation
              notifications
              and calendar event sent to your invitees.`,
        feature1: `Automatically generate unique Zoom video conference details for every meeting you
              schedule.`,
        feature2: `Eliminate the need to set up and remember video conferencing details for all your
              meetings.`,
        feature3: `Have meeting details update in real time when rescheduling or canceling.`,
        signupDescription: `Requires Zoom trial or subscription`,
        pageRedirectTo: "/connect-subgrabh/",
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelBrowseCharts: "Create a Chart",
      },
      thegraphnetwork: {
        title: "TheGraph Network",
        name: "thegraphnetwork",
        description:
          "Analyze & Query TheGraph Network Dataset for Economical Viable Decisions",
        para1: `The Graph Network has 4 major actors i.e Indexers, Delegators, Curators and Consumers. Dapplooker provides you an analytics platform to query this rich dataset and make these smart profitable decisions for you.
                Various actors in the network can use this dataset for creating charts, dashboards and make economical viable decisions in the network. `,
        para2: `Please find resources to query and analyze TheGraph mainnet network data using "Visual SQL". <br/><a href='https://docs.dapplooker.com/projects-and-dapps/the-graph-network' target=_blank>TheGraph Network Documentation & Resources</a>.`,
        feature1: `As a Delegator, you can query the indexer dataset to make decision on selecting the right indexer for you.`,
        feature2: `As an Indexer, you can understand trends and tweak your delegation parameters to attract more delegators.`,
        feature3: `Learn from charts, dashboards & queries created by other community members and modify it as per your need.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-subgrabh/",
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelBrowseCharts: "Create a Chart",
      },
      polygon: {
        title: "Polygon",
        name: "polygonnetwork",
        description:
          "Analyze, Query and Visualize Polygon Dapps with Dapplooker",
        para1: `Easily analyze & visualize your Polygon smart contract data in various formats and gather it into dashboards from multiple sources. Analyze your data with <b>intuitive Visual SQL editor </b>which writes queries for you.
            Share the story your data tells with your team or with your community.
            <b>Share dashboard</b> insights via URL wherever you need to make your organization truly data driven.`,
        para2: `Dapplooker is the perfect complement to Polygon network by helping you make sense of Polygon smart contracts without having to rely on an engineer or analyst. Find resources to analyze and query Polygon data with Visual SQL editor.<br/>
        <a href='https://analytics.dapplooker.com/browse/2' target=_blank>Browse Polygon Dapps DataSet</a><br/>
        <a href='https://analytics.dapplooker.com/collection/5' target=_blank>Browse Charts & Dashboards</a>`,
        para3: `Find resources to analyze and query Polygon network data with "Visual SQL".<br/><a href='https://docs.dapplooker.com/projects-and-dapps/polygon-network' target=_blank>Polygon Network Documentation & Resources</a>`,
        feature1: `Browse your data with Visual SQL or switch to SQL mode to review the code under the hood.`,
        feature2: `Monitor your Dapp growth with weekly/monthly/yearly volume queries and take data driven decisions.`,
        feature3: `Auto updating charts & dashboards which is in sync with new data produced.`,
        feature4: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-smart-contract/",
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      fantom: {
        title: "Fantom",
        name: "fantomLogoWithName",
        description:
          "Analyze, Query and Visualize Fantom Smart Contracts with Dapplooker",
        para1: `Easily analyze & visualize your Fantom smart contract data in various formats and gather it into dashboards from multiple sources. Analyze your data with <b>intuitive Visual SQL editor </b>which writes queries for you.
            Share the story your data tells with your team or with your community.
            <b>Share dashboard</b> insights via URL wherever you need to make your organization truly data driven.`,
        para2: `Dapplooker is the perfect complement to Fantom network by helping you make sense of Fantom smart contracts without having to rely on an engineer or analyst.
            Find resources to analyze and query Fantom chain data with "Visual SQL".<br/><a href='https://docs.dapplooker.com/projects-and-dapps/fantom-chain' target=_blank>Fantom Chain Documentation & Resources</a>`,
        feature1: `Browse your data with Visual SQL or switch to SQL mode to review the code under the hood.`,
        feature2: `Monitor your Dapp growth with weekly/monthly/yearly volume queries and take data driven decisions.`,
        feature3: `Auto updating charts & dashboards which is in sync with new data produced.`,
        feature4: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-smart-contract/",
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      coingecko: {
        title: "Coingecko",
        name: "coinGeckoLogo",
        description:
          "CoinGecko integration enables to track the cryptocurrency current and historical prices and their volume.",
        para1: `CoinGecko integration enables to track the cryptocurrency current prices and their volume data. Cryptocurrency token data is populated in queryable tables. Dapplooker let you query, analyze token price data and build beautiful charts. You can join the price data with your Dapp data to track <b>weekly, monthly USD volumes</b>.`,
        para2: `Dapplooker supports data set for more than <b>5000+ cryptocurrencies</b>. Pricing data is updated at regular intervals. We support <b>token pricing data for multiple networks</b>. Network includes <b>Ethereum, Polygon, Binance, Fantom, xDai</b>.<br/><br/>
        Find resources to analyze and query cryptocurrency token price data with Visual SQL editor.<br/>
           <a href='https://analytics.dapplooker.com/browse/2/schema/price_oracle' target=_blank>Browse Token Price Data</a><br/>
           <a href='https://analytics.dapplooker.com/collection/20' target=_blank>Browse Token Price Collection</a>`,
        feature1: `Browse your data with Visual SQL or switch to SQL mode to review the code under the hood.`,
        feature2: `Monitor your Dapp growth with weekly/monthly/yearly volume queries and take data driven decisions.`,
        feature3: `Auto updating charts & dashboards which is in sync with new data produced.`,
        feature4: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-smart-contract/",
        isSmartContract: true,
        isSubgraph: false,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      bitcanna: {
        title: "Bitcanna",
        name: "bitcannaLogo",
        description:
          "BitCanna provide a decentralized payment network for the legal cannabis industry.",
        para1: `Easily analyze & visualize <b>Bitcanna validator set data</b> in various formats and gather it into dashboards from multiple sources. Analyze your data with <b>intuitive SQL editor</b> which writes queries for you.
        Share the story your data tells with your team or with your community.`,
        para2: `Dapplooker is the perfect complement to Bitcanna network by helping you make sense of Bitcanna network data without having to rely on an engineer or analyst.
        Find resources to analyze and query Bitcanna chain data with SQL editor.<br/>
           <a href='https://analytics.dapplooker.com/browse/2/schema/bitcanna' target=_blank>Browse Bitcanna Data Set</a><br/>
           <a href='https://analytics.dapplooker.com/collection/25' target=_blank>Browse Charts & Dashboard</a>`,
        feature1: `Browse your data with Visual SQL or switch to SQL mode to review the code under the hood.`,
        feature2: `Monitor your Dapp growth with weekly/monthly/yearly volume queries and take data driven decisions.`,
        feature3: `Auto updating charts & dashboards which is in sync with new data produced.`,
        feature4: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-smart-contract/",
        isSmartContract: false,
        isSubgraph: false,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      joystream: {
        title: "Joystream",
        name: "joystreamLogo",
        description:
          "Joystream is a video platform controlled, owned and operated by its users.",
        para1: `Easily analyze & visualize <b>Moonbeam smart contracts & subgraphs</b> in various formats and gather it into dashboards from multiple sources. Analyze your data with <b>Visual SQL</b> which writes queries for you.
          Share the story your data tells with your team or with your community.`,
        para2: `Dapplooker is the perfect complement to Moonbeam network Dapps by helping them make sense of Moo network data without having to rely on an engineer or analyst.
          Find resources to analyze and query Joystream chain data with intuitive SQL editor.<br/>
             <a href='https://analytics.dapplooker.com/browse/2/schema/joystream' target=_blank>Browse Joystream DataSet</a><br/>
             <a href='https://analytics.dapplooker.com/collection/19' target=_blank>Browse Charts & Dashboards</a>`,
        feature1: `Browse your data with Visual SQL or switch to SQL mode to review the code under the hood.`,
        feature2: `Monitor your Dapp growth with weekly/monthly/yearly volume queries and take data driven decisions.`,
        feature3: `Auto updating charts & dashboards which is in sync with new data produced.`,
        feature4: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-smart-contract/",
        isSmartContract: false,
        isSubgraph: false,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
      moonbeam: {
        title: "Moonbeam",
        name: "moonbeamLogo",
        description:
          "Analyze, Query and Visualize Moonbeam Smart Contracts with Dapplooker",
        para1: `Easily analyze & visualize your Moonbeam smart contracts & subgraph data in various formats and gather it into dashboards from multiple sources. Analyze your data with <b>intuitive Visual SQL </b>which writes queries for you.
            Share the story your data tells with your team or with your community.
            <b>Share dashboard</b> insights via URL wherever you need to make your organization truly data driven.`,
        para2: `
          Dapplooker is the perfect complement to Moonbeam network by helping you make sense of Moonbeam smart contracts & subgraphs without having to rely on an engineer or analyst. <br/>
          Find resources to analyze and query Moonbeam data with Visual SQL editor.<br/>
          <a href='https://analytics.dapplooker.com/browse/2' target=_blank>Browse Moonbeam Dapps DataSet</a><br/>
          <a href='https://analytics.dapplooker.com/collection/53' target=_blank>Browse Charts & Dashboards</a>`,
        para3: `Find resources to analyze and query Moonbeam network data with "Visual SQL".<br/><a href='https://docs.dapplooker.com/projects-and-dapps/moonbeam' target=_blank>Moonbeam Network Documentation & Resources</a>`,
        feature1: `Browse your data with Visual SQL or switch to SQL mode to review the code under the hood.`,
        feature2: `Monitor your Dapp growth with weekly/monthly/yearly volume queries and take data driven decisions.`,
        feature3: `Auto updating charts & dashboards which is in sync with new data produced.`,
        feature4: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: "/connect-smart-contract/",
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: "Connect Subgraph",
        buttonLabelConnectSmartContract: "Connect Smart Contract",
        buttonLabelBrowseCharts: "Create a Chart",
      },
    },

    integration: {
      integrationHeader: "Integration",
      integrationDescription: `Dapplooker supports integrations with popular blockchain protocols and networks for Analytics`,
    },
    aboutUs: {
      title: "Learn more about us",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      about1: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      about2: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      about3:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperd.",
      descriptionBottom:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate tera noden carma palorp mades tera.",
    },
    clients: {
      title: "Clients",
      description: `Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
      consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
      sit in iste officiis commodi quidem hic quas.`,
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
    cts: {
      title: "Used by 1000+ Dapps & Growing",
      description:
        "Get started with Dapplooker and build more data-driven web3. Monitor your Dapp growth and make data driven decisions.",
      linkButtonTitle: "Get Started",
    },
    feature: {
      title1: "Visual Dapp Analytics",
      description1:
        "Build and share key metrics for DeFi, NFT, gaming and more. Browse and query smart contract data with SQL editor.",
      title2: "Integrations",
      description2:
        "Query your data from popular protocols and networks like TheGraph, Covalent, Polygon etc. Sync all your Dapp data at a single place for powerful analytics.",
      title3: "Build Network Dashboard",
      description3:
        "Easily analyze & visualize popular networks data with Visual SQL in various formats and gather it into dashboards from multiple sources.",
      title4: "User Retention Analytics",
      description4:
        "Track your Dapp active users and understand what makes them happy. This analysis can be used to identify the success of feature adoption rate and churn rates.",
    },
    features: {
      header: "Features",
      headerDescription:
        "We have decoded Blockchain smart contract data so you can do powerful analysis with simple SQL queries through our Visual SQL interface. Instantly visualise your query results into beautiful charts and graphs. Share dashboards with everyone for collaboration.",
      featuresTitle1: "Connect Smart Contracts",
      featuresDescription1:
        "Connect smart contracts from multiple networks like Ethereum, xDai, Polygon etc. Browse and explore smart contracts data into simple tabular form.",
      featuresTitle2: "Write SQL Queries",
      featuresDescription2:
        "Intuitive SQL editor let anyone query, filter and join data and build awesome charts. It takes the pain out of exploring your data and writes queries for you.",
      featuresTitle3: "Build Dashboard",
      featuresDescription3:
        "Drag & drop and resize your dashboard. Choose from dozens of chart types to create best charts. Gather info from multiple sources into single dashboard.",
      featuresTitle4: "Share Dashboard",
      featuresDescription4:
        "We believe in open community. Share dashboards on a URL anywhere you need. Export your smart contract data in popular formats like CSV, XLS and JSON.",
      featuresTitle5: "Multichain Dapp Analytics",
      featuresDescription5:
        "Analyze & query multiple network smart contracts and build awesome charts & dashboards. Compare and monitor you Dapp growth of multiple networks at single place.",
    },
    hero: {
      header: "We help make sense of smart contract data",
      description:
        "Connect and query your smart contracts, build dashboards to visualize data and share with your community",
      getStartedButtonTitle: "GET STARTED",
    },
    portfolio: {
      header: "Portfolio",
      description:
        "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
      subHeader1: "All",
      subHeader2: "App",
      subHeader3: "Card",
      subHeader4: "Web",
      project1: "App 1",
      project2: "Card 1",
      project3: "Web 1",
    },
    team: {
      header: "Team",
      description: `Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
      consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
      sit in iste officiis commodi quidem hic quas.`,
      teamMember: [
        {
          name: "Walter White",
          designation: "Chief Executive Officer",
        },
        {
          name: "Sarah Jhonson",
          designation: "Product Manager",
        },
        {
          name: "William Anderson",
          designation: "CTO",
        },
      ],
    },
    testimonial: {
      header: "Testimonials",
      description: `Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
      consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
      sit in iste officiis commodi quidem hic quas.`,
      testimonials: [
        {
          name: "Saul Goodman",
          about: "Founder",
          description: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
          Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.`,
        },
        {
          name: "Saul Goodman",
          about: "Founder",
          description: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
          Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.`,
        },
        {
          name: "Saul Goodman",
          about: "Founder",
          description: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
          Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.`,
        },
      ],
    },

    faq: {
      headerFAQ: "Frequently Asked Questions",
    },
  };

  public static patterns = {
    numberValidator: /^[0-9]*$/,
    onlyTextWithoutSpace: /[a-zA-Z]+([\s][a-zA-Z]+)*/,
    email:
      /^[A-Z0-9]+[A-Z0-9_%+-]*(\.[A-Z0-9_%+-]{1,})*@(?:[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?\.)+[A-Z]{2,24}$/i,
    website:
      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]*.[a-z0-9]+\.[a-z/]+(\/[-_a-zA-Z0-9#]+\/?)*$/,
  };

  public static pageRedirectTo = {
    registerDapp: "/connect-smart-contract/",
    home: "/",
    login: "/login/",
    dashboard: "/dashboard/",
    integration: "/integration/",
    signup: "/signup",
    explorer: "/explorer/",
    registerSubgraph: "/connect-subgrabh/",
    analyzerHome: "/analyzerHome/",
    "integration/ethereum": "integration/ethereum",
    "integration/graphprotocol": "integration/graphprotocol",
    "integration/poa": "integration/poa",
    "integration/xdai": "integration/xdai",
    chart: "/chart/",
    dapp: "/dapp/",
    faq: "/faq/",
  };
}
