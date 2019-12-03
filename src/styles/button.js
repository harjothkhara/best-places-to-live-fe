import styled from "styled-components";
import theme from "../theme";
import { typography, space, color, border } from "styled-system";

export const Button = styled.button`
  ${typography};
  ${space};
  ${color};
  ${border}
  transition: 0.275s all ease-in;
  padding: ${theme.space[2]} ${theme.space[3]};

  border: 1px solid ${theme.colors.gray};
  border-radius: 3px;
  font-size: ${theme.fontSizes[1]};
  background-color: ${theme.colors.white};
  margin-bottom: ${theme.space[4]};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const SocialButton = styled.a`
  border: 0;
  color: white
  width: 100%;
  text-decoration: none;
  padding: ${theme.space[2]} ${theme.space[3]};
  margin-bottom: ${theme.space[4]};

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const FacebookButton = styled(SocialButton)`
  background-color: #3b5998;
`;

export const GoogleButton = styled(SocialButton)`
  background-color: #dd4b39;
`;
