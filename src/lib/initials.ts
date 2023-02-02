export default function getInitials(name: string) {
  if (!name) return ''
  return (
    name
      ?.match(/(\b\S)?/g)!
      .join('')
      .match(/(^\S|\S$)?/g)!
      .join('')
      .toUpperCase() || ''
  )
}
