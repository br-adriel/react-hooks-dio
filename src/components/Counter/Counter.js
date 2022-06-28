function Counter() {
  let quantity = 0;
  let increaseQuantity = () => {
    quantity++;
    document.getElementById('counterBox').innerText = quantity;
  };
  return (
    <>
      <h2 id='counterBox'>{quantity}</h2>
      <button onClick={increaseQuantity}>Aumentar</button>
    </>
  );
}

export default Counter;
