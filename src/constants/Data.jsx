import { AngularIcon, HomeIcon, ReactIcon, VueJsIcon } from "../components/Icons";

// Data.js
export const categories = [
    { href: '#', text: 'Shopping' },
    { href: '#', text: 'Images' },
    { href: '#', text: 'News' },
    { href: '#', text: 'Finance' },
];

export const countries = [
    { value: "default", label: "Choose a location", disabled: true },
    { value: "NG", label: "Nigeria", code: "+234" },
    { value: "BR", label: "Brazil", code: "+55" },
    { value: "US", label: "United States", code: "+1" },
    { value: "FR", label: "France", code: "+33" },
    { value: "CN", label: "China", code: "+86" },
];

export const years = [
    //{ value: "default", label: "Select a year", disabled: true },
    { value: 2015 }, { value: 2016 }, { value: 2017 }, { value: 2018 },
    { value: 2019 }, { value: 2020 }, { value: 2021 },
    { value: 2022 }, { value: 2023 }, { value: 2024 },
];

export const numbers = [
    "+234 803 123 4567",
    "+234 802 234 5678",
    "+234 809 345 6789",
    "+234 818 456 7890",
    "+234 807 567 8901"
];

export const users = [
    {name:"Chinonso Okafor", checked: true},
    {name:"Liam Smith"},
    {name:"Lucas Oliveira"},
    {name:"Oliver Müller"},
    {name:"Mohammed Khan"},
    {name:"Aria Wang"},
    {name:"Ayaan Patel"},
    {name:"Sophia Rossi"},
    {name:"Noah Johnson"},
    {name:"Mateo García"}
]

export const technologies = [
    {
        id: 'react-option',
        icon: <ReactIcon className="text-sky-500" />,
        title: 'React Js',
        description: 'A JavaScript library for building user interfaces.'
    },
    {
        id: 'vue-option',
        icon: <VueJsIcon className="text-green-400" />,
        title: 'Vue.js',
        description: 'Vue.js is a model–view front end JavaScript framework.'
    },
    {
        id: 'angular-option',
        icon: <AngularIcon className="text-red-600" />,
        title: 'Angular',
        description: 'A TypeScript-based web application framework.'
    }
]

export const navLinks = [
    { href: "/", label: "Home"},
    { href: "forms", label: "Forms"},
    { href: "topography", label: "Topography"},
    { href: "components", label: "Components"},
  ];

  export  const breadcrumbs = [
    { name: 'Home', href: '#', current: false, icon: <HomeIcon/> },
    { name: 'Projects', href: '#', current: false },
    { name: 'Flowbite', href: '#', current: true }
];

//   https://github.com/igbokwe-chibueze
  
