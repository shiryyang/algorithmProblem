// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
//
// 示例 1:输入: "()"  输出: true
// 示例 2:输入: "()[]{}"  输出: true
// 示例 3:输入: "(]"  输出: false
// 示例 4:输入: "([)]"  输出: false
// 示例 5:输入: "{[]}"  输出: true

// https://leetcode-cn.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const n = s.length
    let res = true
    if (n % 2 === 1) {
        return false
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])
    const stk = []
    for (let i = 0; i < s.length; i++) {
        const ch = s[i]
        if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                res = false
                break
            }
            stk.pop()
        } else {
            stk.push(ch)
        }
    }
    console.log(res && !stk.length)
};
isValid('([}}])')
isValid('()[]{}')
isValid('(]')
isValid('([)]')
isValid('{[]}')
