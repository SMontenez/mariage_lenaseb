export function displayAppContent(show) {
  const content = document.getElementById('app-content');

  const displayValue = show ? 'flex' : 'none';

  content.style.display = displayValue;
}
