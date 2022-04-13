import { Flex, Heading, Icon, IconButton } from '@chakra-ui/react';
import { FaGithubAlt } from 'react-icons/fa';

import { AppearanceSwitcher } from './appearance-switcher';

export const Header = () => (
  <Flex justifyContent="space-between" mb="4">
    <AppearanceSwitcher />
    <Heading>DeadHappy Wheel of Doom</Heading>
    <IconButton
      as="a"
      href={'https://github.com/jamieweavis/wheel-of-doom'}
      aria-label="GitHub"
      variant="ghost"
      icon={<Icon as={FaGithubAlt} fontSize="lg" />}
      target="_blank"
    />
  </Flex>
);
