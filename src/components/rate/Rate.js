const Rate = ({ onRateSelected }) => {
  const buttonsData = [
    { name: 'Economy', dataid: 1, checked: false },
    { name: 'Comfort', dataid: 2, checked: true },
    { name: 'Business', dataid: 3, checked: false },
    { name: 'Premium', dataid: 4, checked: false },
  ];

  const onBtnClick = (e) => {
    onRateSelected(e.target.dataset.id);
  };

  const rateButton = buttonsData.map(({ name, dataid, checked }) => {
    return (
      <li className="switcher__item" key={dataid}>
        <input
          className="switcher__item-input"
          type="radio"
          name="tariff"
          value={name}
          id={name}
          data-id={dataid}
          onChange={onBtnClick}
          defaultChecked={checked}
        />
        <label htmlFor={name}>{name}</label>
      </li>
    );
  });

  return (
    <div className="form__item">
      <div className="form__item-header">Choose your rate</div>
      <ul className="switcher">{rateButton}</ul>
    </div>
  );
};

export default Rate;
