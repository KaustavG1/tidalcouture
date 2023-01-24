import styled from 'styled-components';

import Error from '../common/Error';

const StyledContent = styled.footer`
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
`;

function Body() {
  return (
    <StyledContent>
      {/* This is the main content */}
      <Error />
    </StyledContent>
  );
}

export default Body;
