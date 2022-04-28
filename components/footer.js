import { Flex, Link, Text } from '@chakra-ui/react';

export const Footer = () => (
  <Flex justifyContent="center">
    <Text>
      Made with 🖤 by{' '}
      <Link
        href="https://github.com/deadtechy"
        color="teal.500"
        target="_blank"
        isExternal
      >
        DeadTechy
      </Link>
    </Text>
  </Flex>
);
