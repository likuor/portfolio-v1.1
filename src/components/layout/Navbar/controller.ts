import { useRouter } from 'next/router';

const NavbarController = () => {
  const router = useRouter();
  const { pathname } = router;

  return { pathname };
};

export default NavbarController;
