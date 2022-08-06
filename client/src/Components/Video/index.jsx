import { VideoS } from "./style";

export function Video(props) {
  return (
    <VideoS to={props.link}>
      <img src={props.src} />
      <p>{props.title}</p>
    </VideoS>
  );
}
