import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from 'react-icons/hi2';

const NavBarData = [
  { id: 1, name: 'home', path: '/', icon: <HiHome /> },
  { id: 2, name: 'about', path: '/about', icon: <HiUser /> },
  { id: 3, name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    id: 4,
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

export default NavBarData;
