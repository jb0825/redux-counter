export default function getRandomColor() {
  const colors = [
    "#495057",
    "#f03e3e",
    "#d6336c",
    "#ae3ec9",
    "#7048e8",
    "#4263eb",
    "#1c7cd6",
    "#1098ad",
    "#0ca678",
    "#37b24d",
    "#74b816",
    "#f59f00",
    "#f76707",
  ];

  // 0부터 12까지 랜덤숫자
  return colors[Math.floor(Math.random() * 13)];
}
