import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "works",
        title: "Works",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: "/web-icon.png",
    },
    {
        title: "Mobile Developer",
        icon: "/mobile-icon.png",
    },
    {
        title: "Desktop Developer",
        icon: "/desktop-icon.png",
    },
    {
        title: "Server Handling",
        icon: "/deploy-icon.png",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Cashier System",
        company_name: "POS System",
        icon: "/system-icon.png",
        iconBg: "#383E56",
        date: "March 2023 - Present",
        points: [
            "Casher System is a comprehensive Point of Sale (POS) system that offers a range of functionalities to streamline business operations.",

            "The system provides efficient management of products, allowing users to add products, create product groups, track product details, handle expired products, and manage opening stocks.",

            "Users can easily handle stock management by adding stocks, tracking inventory levels, managing stock losses, and facilitating transfers between different stock locations.",

            "The invoicing feature enables users to display and create buying and selling invoices, as well as handle return transactions for both buying and selling invoices.",

            'While some sections like Customers and Suppliers, Accounts, Management, and Notifications are  "Coming soon," the system already offers a user-friendly interface with both light and dark themes, prioritizing a nice UI and convenient UX to enhance the overall user experience.',
        ],
    },
    {
        title: "Alottopics",
        company_name: "Wordpress Website",
        icon: '/wordpress-icon.png',
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Alottopics is a fashion design WordPress website that focuses on providing training to users through videos and tasks. The platform offers a dedicated section where users can access instructional videos and engage in practical exercises to enhance their fashion design skills.",

            "The website features a gallery section that showcases the works of users. It provides a visually appealing display of the creative outputs of individuals who are part of the Alottopics community. This enables users to showcase their talent, gain recognition, and inspire others within the fashion design field.",

            "Alottopics incorporates a sharing functionality that allows users to easily share their works on the platform. This promotes collaboration and interaction among users, fostering a supportive and creative community where individuals can learn from each other and exchange ideas.",
        ],
    },
    {
        title: "CounteryVoice",
        company_name: "Desktop Application",
        icon: "/desktop-icon.png",
        iconBg: "#E6DEDD",
        date: "Jan 2023 - March 2023",
        points: [
            "CounteryVoice is a feature-rich desktop application focused on music learning theories related to country music. It provides users with in-depth knowledge and understanding of country music concepts and theories.",

            "The application offers a practice section where users can apply the learned theories. It provides a wide range of controllers and editable music notes, allowing users to practice and experiment with different musical elements to enhance their skills and creativity.",

            "The test section of CounteryVoice enables users to assess their understanding and application of country music theories. Through interactive quizzes or assessments, users can evaluate their progress and identify areas for improvement in their music learning journey.",
        ],
    },
    {
        title: "Diet4underweight",
        company_name: "Mobile Application",
        icon: "/mobile-icon.png",
        iconBg: "#383E56",
        date: "Nov 2022 - Dec 2022",
        points: [
            "Diet4underweight is a mobile application designed to assist individuals who are underweight in creating a personalized nutrition plan. It includes a calculator that determines the Basal Metabolic Rate (BMR), allowing users to establish a suitable calorie intake for their goals.",

            "The app enables users to create their own nutrition plan by calculating the calories of each meal. It offers the flexibility to distribute the allocated calories over the three main meals and snacks, ensuring a balanced and nutritious diet.",

            "To help users stay on track with their meal schedule, Diet4underweight incorporates an alarm feature that alerts users when it's time to consume their meals. This ensures timely and consistent adherence to the prescribed nutrition plan. Additionally, the app provides a nutrition library where users can access educational resources to expand their knowledge on nutrition-related topics.",
        ],
    },
];

const testimonials = [
    {
        testimonial: "يجنن حلو اوي ❤️ تسلم ايديك بجد",
        name: "Dr. Maha Ahmed",
        designation: "Assistant Lecturer",
        company: "the Department of Musical Education",
        image: "/girl-icon.png",
    },
    {
        testimonial: (
            <>
                الله ينور يا بيبو ياجامد❤️❤️❤️
                <br />
                لا انا بقيت واثقة معاك مفيش مستحيل 💪🏻💪🏻💪🏻
            </>
        ),
        name: "Dr. Youstina Victor",
        designation: "Assistant Lecturer",
        company: "the Department of Musical Education",
        image: "/girl-icon.png",
    },
    {
        testimonial: " حلو اوي ❤️ تسلم ايديك",
        name: "Dr. Nada",
        designation: "Assistant Lecturer",
        company: "the Department of Economy",
        image: "/girl-icon.png",
    },
];

const projects = [
    {
        name: (
            <>
                <a className="hover:text-blue-500" href="https://learning-piano-online.net/">
                    Learning Piano Online
                </a>
            </>
        ),
        description:
            "The project is an online learning platform that facilitates virtual education and collaboration. It includes features such as scheduling Zoom meetings, publishing articles, and...",
        tags: [
            {
                name: "react",
                color: "text-blue-500",
            },
            {
                name: "typescript",
                color: "text-blue-700",
            },
            {
                name: "tailwind",
                color: "text-green-400",
            },
            {
                name: "laravel",
                color: "text-red-500",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: "/projects/lpo/main.jpg",
        source_code_link: "https://github.com/habibGamal/LPO_NEW",
    },
    {
        name: (
            <>
                <a className="hover:text-blue-500" href="https://aichesusc.org/">
                    AIChE
                </a>
            </>
        ),
        description:
            "The project is a student activity website that serves as a platform for publishing articles and sharing various materials such as images and PDF documents. The system's content is organized into...",
        tags: [
            {
                name: "react",
                color: "text-blue-500",
            },
            {
                name: "typescript",
                color: "text-blue-700",
            },
            {
                name: "tailwind",
                color: "text-green-400",
            },
            {
                name: "laravel",
                color: "text-red-500",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: "/projects/aiche/main.jpg",
        source_code_link: "https://github.com/habibGamal/aiche-remaster",
    },
    {
        name: "Expense Tracker",
        description:
            "The project consists of three main components: Expense Planning, Money Management, and Savings. Expense Planning allows users to create personalized expense plans based on requested data and personal...",
        tags: [
            {
                name: "flutter",
                color: "text-sky-500",
            },
        ],
        image: "/projects/money_app/main.jpg",
        source_code_link: "https://github.com/habibGamal/money_app",
    },
];

export { services, technologies, experiences, testimonials, projects };
