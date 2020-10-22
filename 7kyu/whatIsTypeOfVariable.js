//https://www.codewars.com/kata/57293671c98f77e84b000065/

function type(value) {
    let f = {}.toString.call(value);
    return f === '[object Array]' ? 'array'
        : f === '[object Object]' ? 'object'
            : f === "[object String]" ? 'string'
                : f === "[object Number]" ? 'number'
                    : f === "[object Date]" ? 'date'
                        : f === "[object Boolean]" ? 'boolean'
                            : f === "[object Undefined]" ? 'undefined'
                                : f === "[object Null]" ? 'null'
                                    : false
}