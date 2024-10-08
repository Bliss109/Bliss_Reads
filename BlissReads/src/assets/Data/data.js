// Nav [a] Links Data.......
export const navLinks = [
    {
        name: 'Books',
        path: '/'
    },
    {
        name: 'Categories',
        path: '/categories'
    },
    {
        name: 'Wishlist',
        path: '/wishlist'
    },
    {
        name: 'Blog',
        path: '/blog'
    },
    {
        name: 'About Us',
        path: '/about'
    }
]

//React Icons for the Nav.....
import { FaLock } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";

//navRight links Data.....
export const navRight = {
    managements: [
        {
            id: 1,
            icon: IoIosSearch,
            link: '*'
        },
        {
            id:2,
            icon: FaLock,
            link:'*'
        },
    ]
};

//Header Books Data.......
import Hbook1 from '../Header Books/taylor-swift-song-book-titles-6-103123-e289dd3dd4b2473cba4f217f9c590ea5.jpg'
import Hbook2 from '../Header Books/ols.jpg'
import Hbook3 from '../Header Books/59521966.jpg'

export const headerBooks = [
        {
            id: 1,
            img: Hbook1, 
            title: 'Begin Again',
            info: 'A heartfelt and humorous young adult novel about a college freshman discovering herself at a new school. Andie Rose navigates new friendships, a campus radio show, and unexpected romance as she finds her own path.',
            btnLink: '*'
        },
        {
            id: 2,
            img: Hbook2, 
            title: 'Last Stop',
            info: 'An enchanting love story set in New York City, where August falls for a girl named Jane she meets on the subway. As she unravels Jane’s past, she discovers that Jane may be stuck in time.',
            btnLink: '*'
        },
        {
            id: 3,
            img: Hbook3, 
            title: 'Until the End',
            info: 'The final installment in the Skulduggery Pleasant series, where Valkyrie and Skulduggery face their ultimate battle. As the world teeters on the edge of destruction, they must fight to save it—or watch it fall.',
            btnLink: '*'
        },   
];

