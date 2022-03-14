import { Wrapper } from './Card.styles';

var Card = function (_a) {
    var logo = _a.logo, video = _a.video;
    var handleOnMouseOver = function (e) {
        e.currentTarget.play();
    };
    var handleOnMouseOut = function (e) {
        e.currentTarget.pause();
    };
  return (
    <Wrapper>
      <div className="border" />
      <img src={logo} alt='logo' />
      <video
        loop
        preload='none'
        muted // Needs to be there to be able to play
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        <source src={video} type='video/mp4' />
      </video>
    </Wrapper>
  );
};

export default Card;