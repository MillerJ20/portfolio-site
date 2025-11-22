---
title: 'Ruby Day Two'
date: 'May 29 2023'
excerpt: 'The second day of learning Ruby from the book 7 Languages in 7 Weeks by Bruce A. Tate. Today, we learn about Functions, Arrays, Hashes, and Symbols'
cover_image: '/images/posts/btlang.jpg'
---

Things picked up pretty quickly. It started off by talking about defining functions. In Ruby, you can define a function anywhere and it does not require building a class. 

Next, the book discusses Arrays which work a lot like JS arrays in that they don't have any specific type, and are mostly just an ordered collection. The interesting bit is that `array[-1]` will return the item at the end of the array. Using a negative index will return the item `x` amount of places from the end of the array. You can also use ranges as indexes, and it will return the items in each position of the range. `array[0..1]` will return the first two items of the array. 

Then, the book discusses Hashes, which work like Objects in JS. Key/Value pairs. The main visual distinction is that there is no colon between a key and a value, it looks like this: `numbers = {1 => 'one', 2 => 'two'}` which is kind of bizarre. 

The book then discusses Symbols, which are pretty new to me. A Symbol is an identifier that is appended with a colon. Symbols seem to be the distinction between reference types and value types in something like C#. Two strings can have the same value, but point to a different piece of memory. A symbol points to a specific piece of memory. Interestingly, you can check this in Ruby using the `.object_id` property on an object. Any two variables will have different ID's, meanwhile a Symbol will always have the same ID. 

Then, the book discusses "Code Blocks" which get a bit more complicated. Essentially, code blocks are anonymous functions that can be used as a function parameter, this is surprisingly functional and also draws a lot of comparisons to JS for me. Day 2 has led me to find many similarities between JS and Ruby. The idea of "everything is an object" (Which is by no means exclusive to either language), Dynamic typing, and first class-functions are what come to mind so far.  Currently, though, I am not a huge fan of the syntax of code blocks, as they look something like: 
```Ruby
animals = ['lions', 'tigers', 'bears']
animals.each {|a| puts a}
```
Which would output: `lions, tigers, bears`. I can appreciate the small amount of code it takes to write a relatively robust piece of functionality, but the whitespace and lack of parenthesis makes it a bit hard to follow, at least as a newcomer to the language who is coming from the C-family with all its brackets and semicolons and parenthesis. 

Small note: for a Block, anything within two pipes `|` are the parameters for the block.
Another way to define a codeblock is by using `do/end` so for example:
```Ruby
in_case_of_emergency do
	use_credit_card
	panic
end
```
Where the do/end are the beginning and end of the code block. The next example in the book is what confuses me a little:
```Ruby
def in_case_of_emergency
	yield if_emergency?
end
```

Does yield here invoke the code block that was defined above? Does this mean that if_emergency is TRUE then you invoke the block?

The answer to the first question is yes. `yield` is a keyword that will invoke any block passed into the function. But, anything AFTER yield is passed in as a parameter to the block. The question mark at the end of it_emergency is just coding convention. In C-Family languages you would probably write `isEmergency()` if you have a function that returns a boolean, but in Ruby the question mark is a stylistic naming convention, so the method would be `if_emergency?` as shown above. The function `in_case_of_emergency` will invoke the block passed to it and pass the value of `if_emergency`.

With that cleared, I moved on to defining classes in Ruby. Classes can only inherit from ONE parent class, called a superclass. Superclasses can be chained, but everything always ties back to `Object` which is the superclass in Ruby that everything will eventually inherit from. 

Ruby's classes have an `initialize` method that act as a constructor, in that it runs when the class instantiates a new object. Instance variables (one value per object) are prepended with a single @, while class variables (one value per class) are prepended with double @@. 
The `attr` keyword defines an instance variable and a method to access it, while `attr_accessor` defines the variable, the accessor, and the setter. 

Mixins in Ruby allow for multi-inheritance without using interfaces. Ruby uses "Modules" which will define some set of functionality. A class will then inherit the module by using `include ModuleName` to inject that functionality of the module into the class. Say you have a Person class with one method `to_s` that prints the `@name` of the instance of Person. 
You can create a `ToFile` module that will add functionality to create a filename and print to that file. Including `ToFile` to `Person` is a mixin that will allow you to include functionality not pertinent to the Person class, such as printing the `@name` variable of Person to a file. 
The coolest thing is that in `ToFile` you can have a function that looks like: 
```Ruby
def to_f
	File.open(filename, 'w') {|f| f.write(to_s)}
end
```
This method is using the `to_s` method that is implemented in `Person` without having any idea of its existence. 

Modules allow us to create a simplified single inheritance (single superclass for each class) to define the essence of a class and then attach additional capabilities with modules. This style of inheritance is called Mixins.

## Day 2 Self-Study

### Find: 
- How to access files with and without code blocks. What is the benefit of the code block?
	- It seems the answer the book is looking for is to use `File.open() {}` with a block argument passed in, as using the block would automatically close the file when done, saving resources. The book is kind of old, so I don't think it is aware of changes to Ruby and the `File.read()` method that will read a file, and automatically close the file, with or without a block parameter. I learned that `File` inherits from `IO` and both have a `foreach` method for reading each line in a file, one by one, to avoid reading an entire file to memory at once. 
- How would you translate a hash to an array? Can you translate arrays to hashes?
	- To translate an array to a hash, you would iterate through the array, and at each element assign a value of the hash to the element in the array. 
	- To convert a hash to an array, the `to_a` method exists which will take each key/value pair and build a nested array with the pairs stored in their own arrays.
- Can you iterate through a hash?
	- Yes, using the `each` method, or even the `each_pair` if you want to pass both the key and the value into a block.
- What other data structures do arrays support?
	- Queues, Linked Lists, Stacks, and Sets (This is answered in the book itself)

### Do:
- Print the contents of an array of sixteen numbers, four numbers at a time, using JUST `each`. Now, do the same with `each_slice` in `Enumerable`
 Using `each`:
 ```Ruby
array = [*(1..16)]
array.each {|e| p array[((e - 4)...e)] if e % 4 == 0}
```

Using `each_slice`:
```Ruby
array.each_slice(4) {|a| p a}
```

The entire file for this looks like:
```Ruby
array = [*(1..16)]

puts 'Using each: '

array.each {|e| p array[((e - 4)...e)] if e % 4 == 0}

puts 'Using each_slice: '

array.each_slice(4) {|a| p a}
```

I am starting to see the very developer friendly experience using Ruby, and having fun while using it. Things like ranges makes creating the array very easy, and that `each_slice` method passing in the block is pretty incredible. 
Some notes: `*` is known as the "splat" operator and does some neat things. It can denote an optional parameter, or a parameter where we do not know the number of inputs. Additionally, a parameter with the splat operator converts the arguments to an array within a method. So it works a bit like the zip/unzip in JS. It can also be used to deconstruct from arrays, like so:
```Ruby
first, *, last =  [1, 2, 3, 4, 5]
first
# => 1
last
# => 5
```
The coolest bit is how it allows constructing an array intelligently, without manual conversions, which is what it does for the range above:
```Ruby
# Usually `*thing` wraps `thing` in an array
x = *"hi mom"
# => ["hi mom"]

# ...unless it's nil
x = *nil
# => []

# Arrays are passed through unchanged
x = *[1,2,3]
# => [1, 2, 3]

# But hashes are converted to arrays
x = *{a: 1}
# => [[:a, 1]]
```
Ruby definitely sacrifices performance for developer experience, but man is that developer experience awesome. Lots of magic, lots of block boxes. Alex would hate it lol

- Copy the `Tree` class, except let the initializer accept a nested structure of hashes. This should allow the creation of a tree like this:
``` Ruby
{'grandpa' => {'dad' => {'child 1' => {}, 'child 2' => {}}, 'uncle' => {'child 3' => {}, 'child 4' => {} } } }
```

The solution looks something like this (I stole this): 
```Ruby 
class Tree
	attr_accessor :children, :node_name

	def initialize(tree_data)
		@node_name = tree_data.keys[0]
		@children = tree_data[@node_name].map {|n| Tree.new(Hash[*n])}
	end

	def visit_all(&block)
		visit &block
		children.each {|c| c.visit_all &block}
	end

	def visit(&block)
		block.call self
	end
end

tree_data = {'grandpa' =>
{'dad' =>
{'child 1' => {},
'child 2' => {}},
'uncle' =>
{'child 3' => {},
'child 4' => {}}}}

ruby_tree = Tree.new(tree_data)
puts 'Visiting a node'
ruby_tree.visit {|node| puts node.node_name}

puts

puts 'Visiting entire tree'
ruby_tree.visit_all {|node| puts node.node_name}
```

Initialize now takes an hash as a parameter, and the instance variable `@node_name` is set to an invocation of `Object.keys` which, similarly to JS, returns an array of the keys in the hash.

Then, we map each node to it's own tree (using splat to unzip the unknown amount of children nodes) using a block passed into the map invocation. Badda boom!

- Write a simple grep that will print the lines of a file if a certain phrase is present in those lines. Use a RegEx expression match and read lines from a file. Include line numbers.
```Ruby
regex = /archie/
#using File.foreach to NOT load the entire file into memory, just the current line being read
File.foreach("file.txt").with_index do |line, line_no|
	if line.match(regex) then
		puts "#{line_no + 1}: #{file}"
	end
end
```
Look, I am a python hater but damn this shit looks pretty, and was super easy and intuitive to write. I didn't need to steal this one lol (Though https://coderscat.com/ruby-how-to-read-file-in-lines/ basically gave me the answer, along with info from: https://www.rubyguides.com/2015/06/ruby-regex/).

The `file.txt` I used contains:
```
this does not match
this does not maatch 
archie
Archie
Archie is the best
this does not match
this does archie match
this does match archi
this does not match
this also does not match
AAAAAAARCHIE
aaaaaaaaaaaaaaaaarchie
```

This will output: 
```
3: archie
6: this does archie match
11: aaaaaaaaaaaaaaaaarchie
```
  
#Ruby #Classes #OOP #Arrays #Hashes #Blocks