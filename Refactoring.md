# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

First of all, I separated the logic based on the 4 use cases that we have in this function. Starting from the trivial case. Now developers can easily navigate through the code and understand all the cases. Secondly, I have extracted the common logic into a function which was utilized more than once. So we have a single source of truth. Also, in future if change is required in this logic so we have to do it only at one place.

I have also installed babel to use the latest es6 import functionality. There were a lot of if else conditions in the code which were making it hard to read. I have tried to simplify it by using minimum if conditions with the combination of return statements. I wrote a total of 7 test cases and the code coverage is 100% (y).
