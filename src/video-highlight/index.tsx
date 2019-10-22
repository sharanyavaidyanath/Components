import React from "react";
import styled from "styled-components";

export interface VideoHighlightProps {
  video: string;
  highlight: string | React.ReactNode;
  videoOnLeft?: boolean;
}

interface ContainerProps {
  alternateLayout: boolean;
}

// #region styled-components
const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-areas: ${props =>
    props.alternateLayout ? '"video highlight"' : '"highlight video"'};
  column-gap: 50px;
  margin: 25px;
`;

const Highlight = styled.div`
  width: 300px;
  grid-area: highlight;
  color: white;
  font-family: "Modak", cursive;
  align-self: center;
  font-size: 35px;
`;

const Video = styled.video`
  width: 580px;
  grid-area: video;
  border-radius: 10px;
`;
//# endregion

const VideoHighlight: React.FC<VideoHighlightProps> = ({
  video,
  highlight,
  videoOnLeft,
}: VideoHighlightProps) => {
  return (
    <Container alternateLayout={Boolean(videoOnLeft)}>
      <Highlight>{highlight}</Highlight>
      <Video src={video} controls />
    </Container>
  );
};

export default VideoHighlight;
