//https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8/

const bloodAlcoholContent = ({ ounces, abv }, weight, sex, time) => {
  const ratio = sex === 'male' ? 0.73 : 0.66
  const alcoholConsumed = ounces * abv
  return Number(
    (alcoholConsumed * 5.14 / weight * ratio - 0.015 * time).toFixed(4)
  )
}