import styled from 'styled-components';

const StyledContent = styled.div`
  bottom: 0px;
  height: 73vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledText = styled.div`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  font-style: ${({ type }) => (type === '404' ? 'italic' : 'normal')};
  color: ${({ type }) => (type === '404' ? '#999999' : '#1a0c02')};
`;

const StyledLink = styled.a`
  color: #000;
  font-weight: 400;

  &:hover {
    color: #696969;
  }
`;

const StyledTextWithLink = styled.p``;

function Error() {
  return (
    <StyledContent>
      <StyledText size={350} weight={500} type="404">
        404
      </StyledText>
      <StyledText size={20} weight={500}>
        The page you are looking for doesn&apos;t exist.
      </StyledText>
      <StyledTextWithLink>
        <StyledLink href="/">Click here</StyledLink> to go back to the home
        page.
      </StyledTextWithLink>
    </StyledContent>
  );
}

export default Error;
