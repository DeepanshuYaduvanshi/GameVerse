import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();  // jis bhi function ke aage use likha h vh hook h
  // isopen tells us drawer is open or close 
  // onopen -> open the drawer
  // onclose -> close the drawer
  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'} // margin
        left={'4'}
        colorScheme="purple"
        p={'0'}  // padding 0
        w={'10'}  // width 10 unit and 1 unit = 0.25rem or 4 px
        h={'10'}  // height
        borderRadius={'full'} // circle bn jayega
        onClick={onOpen}  // click krne pr open hoga
      >
        <BiMenuAltLeft size={'20'} />  {/*left top me three bar icon h jisme home videos vgera h  vo h ye  , 20 * 4 = 80px */}
      </Button>
      {/* top left 3 bar button ko click krne pr drawer aayega jisme home videos etc options hai */}
      {/* placement means direction ki kha se aayega drawer open hoga jb , to hm to left se open krna chahte h , so placement left krdo and onclose krne pr close ho jayega drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          {/* cross sign on drawer for closing it aa jayega below line se */}
          <DrawerCloseButton />
          <DrawerHeader>GameVerse</DrawerHeader>
          <DrawerBody>
            {/* VStack kuch nhi display : flex in column direction h  and by default ye vertically and horizontally center me h , to hm ise flex start kr denge kyuki hme sare start se chaiye*/}
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose} // click krte hi home pr drawer close
                variant={'ghost'} //hover krne pr color change hoga , ase bahut variant or h jaise hover pr underline aa jaye and many more like ghost , link , outline , solid (defalut), unstyled
                colorScheme={'purple'} // home button color
              >
                <Link to={'/'}>Home</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            {/* horizontal stack flex direction row */}
            <HStack
              pos={'absolute'} 
              bottom={'10'} // margin
              left={'0'}
              w={'full'} // width
              justifyContent={'space-evenly'} // equal spacing
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;