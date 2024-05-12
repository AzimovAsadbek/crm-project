import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: ${({ width }) =>
    width && typeof width === "string" ? width : `${width}px`};
  height: ${({ height }) =>
    height && typeof height === "string" ? height : `${height}px`};
  max-width: ${({ width }) =>
    width && typeof width === "string" ? width : `${width}px`};

  overflow: hidden;

  border: 1px solid var(--secondaryColor);
  border-radius: 8px;
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === "string" ? borderRadius : `${borderRadius}px`};

  background-color: white;
`;

const Input = styled.input`
  flex: 1;
  outline: none;
  border-radius: 8px;
  height: 36px;

  width: ${({ width }) =>
    width && typeof width === "string" ? width : `${width}px`};

  height: ${({ height }) =>
    height && typeof height === "string" ? height : `${height}px`};

  max-width: ${({ width }) =>
    width && typeof width === "string" ? width : `${width}px`};

  border: 0;

  color: ${({ color }) => (color ? color : "#bbc3cd")};

  font-size: ${({ fontSize }) =>
    fontSize && typeof fontSize === "string" ? fontSize : `${fontSize}px`};

  font-weight: ${({ fontWeigth }) =>
    fontWeigth && typeof fontWeigth === "string"
      ? fontWeigth
      : `${fontWeigth}px`};

  line-height: ${({ lineHeight }) =>
    lineHeight && typeof lineHeight === "string"
      ? lineHeight
      : `${lineHeight}px`};

  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === "string" ? borderRadius : `${borderRadius}px`};

  &::placeholder {
    color: ${({ placeholderStyle }) =>
      placeholderStyle?.color ? placeholderStyle?.color : "#bbc3cd"};

    font-size: ${({ placeholderStyle }) =>
      placeholderStyle?.fontSize &&
      typeof placeholderStyle?.fontSize === "string"
        ? placeholderStyle?.fontSize
        : `${placeholderStyle?.fontSize}px`};

    font-weight: ${({ placeholderStyle }) =>
      placeholderStyle?.fontWeigth &&
      typeof placeholderStyle?.fontWeigth === "string"
        ? placeholderStyle?.fontWeigth
        : `${placeholderStyle?.fontWeigth}px`};

    line-height: ${({ placeholderStyle }) =>
      placeholderStyle?.lineHeight &&
      typeof placeholderStyle?.lineHeight === "string"
        ? placeholderStyle?.lineHeight
        : `${placeholderStyle?.lineHeight}px`};
  }
`;

export { Container, Input };
