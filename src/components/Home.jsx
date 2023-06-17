import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%', // margin
  top: '50%',   // margin
  transform: 'translate(-50%,-50%)', // center 
  textTransform: 'uppercase',
  p: '4',  // padding
  size: '4xl',
};

const Home = () => {
  // box is like div , bs chakra ui ki cheeze use kr skenge
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2" // padding in y
          w={'fit-content'} // jitna likha h content utni width
          borderBottom={'2px solid'}
          m="auto"  // margin
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']} // small screen , for all --> small screen its col otherwise  row
        >
          {/* filter change color of pic  and height -> small screen , for others*/}
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']} // for small screen , others
            textAlign={'center'}
          >
            Our gaming website offers a comprehensive range of services to cater to every gamer's needs. Dive into our extensive video library, packed with expert insights, engaging Let's Plays, and thrilling game trailers. Stay up-to-date with the latest gaming trends and industry news through our curated content. Join our vibrant community and showcase your skills by uploading and sharing your own gameplay videos. Engage in lively discussions, exchange tips and tricks, and forge connections with fellow gamers. Participate in exciting tournaments and competitions, test your mettle, and prove your gaming prowess. With our diverse services, we strive to create an immersive and interactive platform that brings gamers together to celebrate the love of gaming.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}  // page count 
    showThumbs={false} // thumbnail
    showArrows={false} // side arrows
  >
    <Box w="full" h={'100vh'}>
      {/* cover do our resolution better */}
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} // ... is way of using this heading optional object , and ye uper h ise file me
      >
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;