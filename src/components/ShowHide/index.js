// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isDisplay: false, isDisplay1: false}

  onDisplay1 = () => {
    this.setState(prevState => ({isDisplay: !prevState.isDisplay}))
  }

  onDisplay = () => {
    this.setState(prevState => ({isDisplay1: !prevState.isDisplay1}))
  }

  render() {
    const {isDisplay} = this.state
    const {isDisplay1} = this.state

    const fnameAdd = isDisplay ? (
      <div className="card">
        <h1>Joe</h1>
      </div>
    ) : null

    const lnameAdd = isDisplay1 ? (
      <div className="card">
        <h1>Jonas</h1>
      </div>
    ) : null

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="sub-container">
          <div className="sub-container1">
            <button
              type="button"
              className="button-card"
              onClick={this.onDisplay1}
            >
              Show/Hide firstname
            </button>
            {fnameAdd}
          </div>
          <div className="sub-container1">
            <button
              type="button"
              className="button-card"
              onClick={this.onDisplay}
            >
              Show/Hide lastname
            </button>
            {lnameAdd}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
