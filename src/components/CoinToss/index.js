import {Component} from 'react'

export default class CoinToss extends Component {
  state = {
    t: 0,
    h: 0,
    to: 0,
    img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  bn = () => {
    const {t, h, to, img} = this.state
    const a = Math.floor(Math.random() * 2)
    console.log(a)
    this.setState({to: to + 1})
    const c =
      a === 0
        ? this.setState({
            h: h + 1,
            img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
          })
        : this.setState({
            t: t + 1,
            img: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
          })
  }

  render() {
    const {t, h, to, img} = this.state

    return (
      <div>
        <div>
          <h1>COIN TOSS GAME</h1>
          <p>Heads (or) Tails</p>
          <img src={img} alt="toss result" />
          <button onClick={this.bn} type="button">
            Toss Coin
          </button>
        </div>
        <div>
          <p>Total:{to}</p>
          <p>Tails:{t}</p>
          <p>Heads:{h}</p>
        </div>
      </div>
    )
  }
}
