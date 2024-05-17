import "./VideoComponent.scss";

const VideoComponent = () => {
  return (
    <div className="VideoComponent">
      <video autoPlay loop muted>
        <source src="/video/mishkaCoffee-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComponent;
