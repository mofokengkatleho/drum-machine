function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const music = [
{
  key: 'Q',
  note: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  key: 'W',
  note: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  key: 'E',
  note: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  key: 'A',
  note: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  key: 'S',
  note: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  key: 'D',
  note: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  key: 'Z',
  note: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  key: 'X',
  note: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  key: 'C',
  note: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];


document.addEventListener('keydown', event => {
  const id = event.key.toUpperCase();
  const sound = document.getElementById(id);

  if (sound) {
    const parent = sound.parentNode;
    parent.classList.add('active');

    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is currently active`;
    sound.play();
  }
});

const App = () => /*#__PURE__*/
React.createElement("div", { id: "display", className: "display" }, /*#__PURE__*/
React.createElement("h1", null, "Play any drum below"),
music.map((sound, index) => /*#__PURE__*/
React.createElement(DrumPad, { text: sound.key, key: index, audio: sound.note })));




class DrumPad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playSound",











    () => {
      this.audio.current.play();

      const id = this.audio.current.id;

      const parent = this.audio.current.parentNode;
      parent.classList.add('active');

      const display = parent.parentNode;
      display.querySelector('h1').innerText = `${id} is currently active`;
    });this.audio = React.createRef();}componentDidMount() {this.audio.current.addEventListener('ended', event => {const parent = event.target.parentNode;parent.classList.remove('active');});}

  render() {
    const { text, audio } = this.props;

    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", onClick: this.playSound, id: `drum-${text}` },
      text, /*#__PURE__*/
      React.createElement("audio", { ref: this.audio, src: audio, className: "clip", id: text })));


  }}




ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('drum-machine'));