const Options = ({ option, onOptionsSelect }) => {
  const optionsSelect = (e) => {
    onOptionsSelect(e.target.dataset.id, e.target.id);
  };

  const optionElement = option.map(({ name, id, description }) => {
    return (
      <div className="option__item" key={id}>
        <input
          className="option__input"
          type="checkbox"
          name={name}
          id={name}
          value={name}
          onChange={optionsSelect}
          data-id={id}
        />
        <label className="option__checkmark" htmlFor={name}></label>
        <label className="option__text" htmlFor={name}>
          {description}
        </label>
      </div>
    );
  });

  return (
    <div className="form__item">
      <div className="form__item-header">Extra options</div>
      <div className="option">{optionElement}</div>
    </div>
  );
};

export default Options;
