
export const Navitems = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About Us',
    link: '/about-us',
  },
  {
    label: 'Destination',
    link: '/destination',
  },
  {
    label: 'Package',
    link: '/package',
  },
  {
    label: 'Blog',
    link: '/blogs',
  },
  {
    label: 'Contact Us',
    link: '/contact-us',
  },
]

export const Packages = [
  {
    id: 12,
    img:"https://images.pexels.com/photos/3873054/pexels-photo-3873054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Bauddha Stupa",
    duration: "2 Day & 1 Night",
    price: "45$"
  },
  {
    id: 13,
    img:"https://images.pexels.com/photos/14431158/pexels-photo-14431158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Bindabasini Tample,Pokhara",
    duration: "3 Day & 2 Night",
    price: "56$"
  },
  {
    id: 14,
    img:"https://images.pexels.com/photos/14367175/pexels-photo-14367175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Patan Durbar Square",
    duration: "1 Day",
    price: "14$"
  },
  {
    id: 16,
    img:"https://images.pexels.com/photos/5569095/pexels-photo-5569095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Mustang",
    duration: "4 Day & 3 Night",
    price: "88$"
  },
  {
    id: 17,
   img:"https://images.pexels.com/photos/11472639/pexels-photo-11472639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "PashupattiNath",
    duration: "1 Day",
    price: "10$"
  },
  {
    id: 18,
    img:"https://images.pexels.com/photos/11757175/pexels-photo-11757175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Bhaktapur Durbar Square",
    duration: "1 Day ",
    price: "27$"
  },
  {
    id: 19,
    img:"https://images.pexels.com/photos/7331531/pexels-photo-7331531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Lumbini",
    duration: "3 Day & 2 Night",
    price: "50$"
  },
]

import {BiPaperPlane} from 'react-icons/bi'
import {MdAddLocationAlt} from 'react-icons/md'
import {GiBarbedStar, GiMountains} from 'react-icons/gi'

export const Featurelist = [
  {
    id: 1,
    title: "Aweome Tour",
    count: 500,
    icon: <BiPaperPlane/>
  },
  {
    id: 2,
    title: "New Destination",
    count: 300,
    icon: <MdAddLocationAlt/>
  },
  {
    id: 3,
    title: "Years Experience",
    count: 3,
    icon: <GiBarbedStar/>
  },
  {
    id: 4,
    title: "Best Mountains",
    count: 16,
    icon: <GiMountains/>
  }
]