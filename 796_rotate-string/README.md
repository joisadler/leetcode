We are given two strings, `A` and `B`.

`A` shift on `A` consists of taking string `A` and moving the leftmost character to the rightmost position. For example, if `A = 'abcde'`, then it will be `'bcdea'` after one shift on `A`. Return True if and only if `A` can become `B` after some number of shifts on `A`.

**Example 1:**
<pre>
<b>Input:</b> A = 'abcde', B = 'cdeab'
<b>Output:</b> true
</pre>

**Example 2:**
<pre>
<b>Input:</b> A = 'abcde', B = 'abced'
<b>Output:</b> false
</pre>

**Note:**

- `A` and `B` will have length at most `100`.
