test() 
- to test the regex 
- takes the reges, applies it to string and returns ```true``` or ```false``` if patterns matches or not.

Syntax: ```regex.test(testString);```

- ```\string\``` matches the word string in the testString.

- search for multiple patterns using the alternation or OR operator: ```|``` ex: ```/yes|no/``` to check either yes or no

- ignore case: /string/i

match()
- extract the actual matches in the string
- syntax: ```string.match(regex)```

i : case insensitive 
g : extract pattern more than once
. : match any character
[] : character class to match specific chars inside []
- : range of characters
^ : inside [] before chars you do not want to match
+ : tests if char occurs at least once
* : occurs zero or more times
? : lazy match
^ : outside [] to match the beginning of string
$ : match chars at the end of string
\w : match alphabet (upper and lower case) and numbers
    equals [A-Za-z0-9_]
\W : match [^A-Za-z0-9_] 
\d : [0-9]
\D : [^0-9]
{2,} : at least 2 chars: lower, upper number of patters
\s : whitespace, carriage return, tab, form feed, new line chars
    [ \r\t\f\n\v]
\S : everything except whiteSpace [^ \r\t\f\n\v]
? : also, for optional chars

  
greedy match - finds longest part of string that fits regex pattern and returns it as match
lazy match - finds smallest part that satisfies regex pattern

Lookaheads - patterns to look-aheads in your string to check for patterns further along
- positive: to make sure the element in the search pattern is there, but won't actually match it. (?=...)
- negative: to make sure the element in the search pattern is not there. (?!...)

... is the pattern that you do not want to be there.















