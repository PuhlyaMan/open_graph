const Button = ({ value }) => {

  const onClick = () => {
    alert(value)
  }

  return <button onClick={onClick}>Клик, епта!</button>
};

export default Button
