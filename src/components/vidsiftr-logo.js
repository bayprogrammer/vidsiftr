import {LitElement, css, html} from 'lit'

export default class VidsiftrLogo extends LitElement {
  static properties = {
    name: {},
  }

  static styles = css`
    span {
      opacity: 75%;
    }

    h1 {
      margin: 0;
      padding: 56pt;
      color: rgb(78, 5, 33);
      background-color: rgb(234, 19, 49);
      text-align: center;
    }
  `

  static icons = [
    '\u{1F3AC}',          // clapper
    '\u{1F3A5}',          // movie camera
    '\u{1F39E}\u{FE0F}',  // film frames
    '\u{1F37F}',          // popcorn
    '\u{1F4FD}\u{FE0F}',  // film projector
    '\u{1F4FA}',          // television
    '\u{1F4F9}',          // video camera
    '\u{1F4FC}',          // videocassette
    '\u{1F4C0}',          // dvd
    '\u{1F6CB}\u{FE0F}',  // couch & lamp
    '\u{1F39F}\u{FE0F}',  // admission tickets
    '\u{1F3AD}',          // performing arts
    '\u{2B50}',           // star
    '\u{1F929}',          // star-struck
    '\u{1F4AB}',          // dizzy
    '\u{25B6}\u{FE0F}',   // play button
    '\u{23EF}\u{FE0F}',   // play or pause button
  ]

  constructor() {
    super()

    this.icon = VidsiftrLogo.icons[0];
  }

  render() {
    return html`<h1><span>${this.icon}</span> VidSiftr</h1>`
  }
}

customElements.define('vidsiftr-logo', VidsiftrLogo)
