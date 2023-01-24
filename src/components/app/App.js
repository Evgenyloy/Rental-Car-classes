import { Component } from 'react';
import './App.css';

import OrderWindow from '../orderWindow/OrderWindow';
import OrderResolt from '../orderResolt/OrderResolt';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tariff: [
        { name: 'economy', isSelected: false, id: '1', price: 10 },
        { name: 'comfort', isSelected: true, id: '2', price: 15 },
        { name: 'business', isSelected: false, id: '3', price: 20 },
        { name: 'premium', isSelected: false, id: '4', price: 30 },
      ],
      option: [
        {
          name: 'option1',
          isSelected: false,
          id: '1',
          price: 5,
          description: 'Submission further 15 km from the city',
        },
        {
          name: 'option2',
          isSelected: false,
          id: '2',
          price: 7,
          description: 'Child seat with attachments',
        },
        {
          name: 'option3',
          isSelected: false,
          id: '3',
          price: 10,
          description: 'Wedding jewelry set',
        },
        {
          name: 'option4',
          isSelected: false,
          id: '4',
          price: 20,
          description: 'Additional insurance',
        },
      ],
      rate: 15,
      timeRange: '2',
      optionsSum: 0,
      totalPrice: 0,
    };
  }

  optionTogler = (id) => {
    this.setState(({ option }) => ({
      option: option.map((item) => {
        if (item.id === id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return item;
      }),
    }));
    this.setState(({ option }) => {
      const optionPrice = option.filter((item) => item.isSelected);

      let selectedOptions = optionPrice.reduce(
        (acc, number) => acc + number.price,
        0
      );
      return { optionsSum: selectedOptions };
    });
  };

  onOptionsSelect = (id, option) => {
    switch (option) {
      case 'option1':
        this.optionTogler(id);
        break;
      case 'option2':
        this.optionTogler(id);
        break;
      case 'option3':
        this.optionTogler(id);
        break;
      case 'option4':
        this.optionTogler(id);
        break;
      default:
        return null;
    }
  };

  componentDidMount() {
    this.totalCost();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.totalPrice !== this.state.totalPrice ||
      prevState.rate !== this.state.rate ||
      prevState.optionsSum !== this.state.optionsSum ||
      prevState.timeRange !== this.state.timeRange
    ) {
      this.totalCost();
    }
  }

  totalCost = () => {
    let totalPrice =
      this.state.timeRange * this.state.rate + this.state.optionsSum;
    this.setState({ totalPrice });
  };

  onTimeChange = (timeRange) => {
    this.setState({ timeRange });
  };

  onRateSelected = (id) => {
    this.setState(({ tariff }) => ({
      tariff: tariff.map((item) => {
        if (item.id === id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return { ...item, isSelected: false };
      }),
    }));
    this.setState(({ tariff }) => ({
      rate: tariff.filter((item) => item.isSelected)[0].price,
    }));
  };

  render() {
    const { totalPrice, timeRange, optionsSum, rate, option } = this.state;
    return (
      <div className="container">
        <OrderWindow
          onRateSelected={this.onRateSelected}
          onTimeChange={this.onTimeChange}
          onOptionsSelect={this.onOptionsSelect}
          option={option}
        />
        <OrderResolt
          totalPrice={totalPrice}
          timeRange={timeRange}
          rate={rate}
          optionsSum={optionsSum}
        />
      </div>
    );
  }
}

export default App;
