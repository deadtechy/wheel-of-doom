import { Flex, Link, Text } from '@chakra-ui/react';

export const Footer = () => (
  <Flex justifyContent="center">
    <Text>
      Made with 🖤 by{' '}
      <Link
        href="https://github.com/dead-happy-tech"
        color="teal.500"
        target="_blank"
        isExternal
      >
        DeadTechies
      </Link>
    </Text>
  </Flex>
);
