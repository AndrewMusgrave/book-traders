export function classNames(...props) {
  return props.filter(Boolean).join(' ');
}
