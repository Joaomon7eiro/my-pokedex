import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const Loading = styled(FaSpinner)`
  animation: ${rotate} 2s linear infinite;
`;
