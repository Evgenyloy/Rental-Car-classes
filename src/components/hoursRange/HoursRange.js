import { Component } from 'react';

class HouseRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValue: '2',
    };
  }

  onChangeValue = (e) => {
    this.setState({ rangeValue: e.target.value });
    this.props.onTimeChange(e.target.value);
  };

  render() {
    return (
      <div className="form__item">
        <div className="form__item-header">
          How many hours do we rent (minimum 2 hours)
        </div>
        <div className="slider">
          <input
            className="slider__input"
            type="range"
            name="time"
            id="time"
            step="1"
            min="2"
            max="96"
            value={this.state.rangeValue}
            onChange={this.onChangeValue}
          />
          <output className="slider__output" id="volume" htmlFor="time">
            {this.state.rangeValue}
          </output>
        </div>
      </div>
    );
  }
}

export default HouseRange;
