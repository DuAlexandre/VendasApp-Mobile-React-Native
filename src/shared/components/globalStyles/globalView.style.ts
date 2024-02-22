import styled from "styled-components/native";

interface DisplayProps {
    customMargin?: string;
}

export const DisplayFlexColumn= styled.View<DisplayProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    ${(props) => (props.customMargin ? `margin: ${props.customMargin};` : '')}
`;