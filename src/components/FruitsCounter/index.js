import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrement = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="fruit-container">
          <h1>
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count"> {banana}</span> bananas
          </h1>
          <div className="image-container">
            <div className="fruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncrement}
              >
                Eat mango
              </button>
            </div>
            <div className="fruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.onDecrement}
              >
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
