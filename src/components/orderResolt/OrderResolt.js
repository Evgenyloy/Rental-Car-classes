const OrderResolt = ({ totalPrice, timeRange, rate, optionsSum }) => {
  return (
    <form className="form form-right" action="#">
      <div className="form__item">
        <h2 className="form__item-header">Your order</h2>
        <div className="form__order">
          <span>Rate:</span>
          <output id="order-tariff"> — {rate + '$'}</output>
        </div>
        <div className="form__order">
          <span>Rental period:</span>
          <output id="order-time"> — {timeRange + ' hours'}</output>
        </div>
        <div className="form__order">
          <span>Additionally:</span>
          <output id="order-option"> — {optionsSum + ' $'}</output>
        </div>
      </div>
      <div className="form__item">
        <h2 className="form__item-header">The total cost of the trip</h2>
        <output className="form__total" id="total">
          {totalPrice}
        </output>
      </div>
    </form>
  )
}

export default OrderResolt
