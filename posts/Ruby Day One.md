---
title: 'Ruby Day One'
date: 'May 29 2023'
excerpt: 'The first day of learning Ruby from the book 7 Languages in 7 Weeks by Bruce A. Tate. Today, we learn about Ruby resources, loops, and string methods'
cover_image: '/images/posts/btlang.jpg'
---

The first few points the book asks me to "Find" is a list of resources. It is as follows:
- The Ruby API
- The free online version of Programming Ruby: The Pragmatic Programmer's Guide
- A method that substitutes part of a string (Since EVERYTHING in Ruby is an object, I think if I try assigning a string and then calling `.methods` on it, I can find this method. Though looking it up online might be faster)
- Information about Ruby's RegEx (Ruby fully supports RegEx)
- Information about Ruby's ranges (A Range object represents a collection of values that are between given begin and end values i.e `(1..4).to_a # => [1, 2, 3, 4]`)

Here are the results of my findings: 

Ruby API: Some String methods modify `self`. Usually if it ends with `!` the method will modify self and return self. A similarly named method without the `!` will return a new string. Usually a method with a bang mutates, and without a bang does not. However, string#replace does mutate. 

Programming Ruby online book: It was written in 2000, and is quite dated. Will look for more string information. It talks about double-quoted or single-quoted strings. Double quoted strings allow for more escape sequences. using `#{ expr }` in a double quoted string will substitute the expression. Also introduced me to string.split (Can be passed a Regex expression to tell how the string should split), string.chomp (Returns string with given record separator removed), and string.squeeze (removes repeated characters).

The book also asks that I DO the following:
- [x] Print the string "Hello, World"
- [x] For the string, "Hello, Ruby" find the index of the word "Ruby" (str.Index returns index of first letter, in this case, 7)
- [x] Print my name ten times (Used while loop)
- [x] Print the string "This is sentence number 1" where the number increases from 1 to 10
- [x] Run a Ruby program from a file (run `ruby FILE_NAME` from cmd in directory where file is)
- [x] Write a program that picks a random number, let player guess the number and tell the player whether the number is too low or too high.
      
      ![[Pasted image 20230510201100.png]]

#Ruby #Strings #Loops