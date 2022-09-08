import styled from "styled-components";

export const A = styled.style``;

export const Mainn = styled.div`
  background-color: lightblue;
  margin: 0 20%;
  .outer {
    cursor: grab;
    overflow: hidden;
  }
  .inner {
  }

  .item {
    display: flex;

    min-height: 14vw;
    min-width: 15vw;
    img {
      width: 17vw;
      height: 24vw;
      padding: 1.5vw;
      border-radius: 2.5vw;
      pointer-events: none;
    }
  }
  .uldiv {
    border: 1px solid black;
  }
  ul {
    display: flex;
    gap: 3vw;
  }
`;
