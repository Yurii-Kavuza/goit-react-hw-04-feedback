import styled from '@emotion/styled';

export const Buttons = styled.div`
  display: flex;
  padding: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[3]}px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: ${p => p.theme.radii.normal};
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;

  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
