import styled from '@emotion/styled';

export const Result = styled.p`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
