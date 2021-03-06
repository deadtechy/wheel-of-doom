import {
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const AppearanceSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      onClick={toggleColorMode}
      icon={<Icon as={SwitchIcon} fontSize="lg" />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
