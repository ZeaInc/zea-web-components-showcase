const toKebabCase = (str) => str.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map(word => word.toLowerCase()).join('-');

const constructArgs = (args = {}) =>  Object.keys(args).map((arg) => `${toKebabCase(arg)}="${args[arg]}"`).join(' ')

export { toKebabCase, constructArgs }