export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  const numbItems = items.length;
  const numbPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numbPacked / numbItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go "
          : `🧳You have ${numbItems} items on your list, and you already packed
          ${numbPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
