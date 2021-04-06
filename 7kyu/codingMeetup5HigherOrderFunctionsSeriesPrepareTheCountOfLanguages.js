// https://www.codewars.com/kata/5828713ed04efde70e000346/

function countLanguages(list) {
  return list.reduce((languages, { language }) => {
    languages.hasOwnProperty(language) ? languages[language]++ : (languages[language] = 1)
    return languages
  }, {})
}