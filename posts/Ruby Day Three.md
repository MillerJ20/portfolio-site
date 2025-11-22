---
title: 'Ruby Day Three'
date: 'May 29 2023'
excerpt: 'The final day of learning Ruby from the book 7 Languages in 7 Weeks by Bruce A. Tate. Today, we learn about metaprogramming, open classes, and modules'
cover_image: '/images/posts/btlang.jpg'
---

Oh god the book is gonna make me do metaprogramming. Here is what I currently believe metaprogramming is: Programming about programming. So I am thinking of things like terraform, code that builds code. The book defines it as writing programs that write programs. That's what I was meant, swear it.  

## Metaprogramming

Rails has a framework called ActiveRecord which uses Metaprogramming to build classes that link to database tables.
```Ruby
class Department < ActiveRecord::Base
	has_many :employees
	has_one :manager
end
```
`has_many` and `has_one` are Ruby methods that add all the instance variables and methods needed to establish the respective relationships. 

### Open Classes

The first invocation of `class` defines a class, once a class is already defined, subsequent invocations modify that class. This can be shown in the following example: 
```Ruby
class NilClass 
	def blank?
		true
	end
end

class String 
	def blank?
		self.size == 0
	end
end

["", "person", nil].each do |element|
	puts element unless element.blank?
end
```
Ruby's open classes allow direct modification of /any/ class, which is a very big shotgun aimed directly at your feet. In this case, it means we can call our each method with the do block and no matter what the element type is, we can call `blank?` because we added that method to the possible types in the array. Open classes allow for hype-specific modifications to fit business demands. 

### method_missing

This language is nuts. Because of open classes and the ability to overwrite anything, you can use the `method_missing` method which is called when a piece of code tries to invoke a method that doesn't exist. 
`method_missing` takes in the name of the attempted class, and its arguments as parameters. You can override the logic of `method_missing` to create a sort of "catch-all" method. 
```Ruby 
class Roman
	def self.method_missing name, *args
		roman = name.to_s
		roman.gsub!("IV", "IIII")
		roman.gsub!("IX", "VIIII")
		roman.gsub!("XL", "XXXX")
		roman.gsub!("XC", "LXXXX")

		(roman.count("I") +
		roman.count("V") * 5 +
		roman.count("X") * 10 + 
		roman.count("L") * 50 + 
		roman.count("C") * 100)
	end
end

puts Roman.X
puts Roman.XC
puts Roman.XII
puts Roman.X

# 10 -> 90 -> 12 -> 10
```

It is difficult to find a use for this that outweighs losing out on the `method_missing` functionality, and it is a bit hacky and I can see this being a thorn in a production codebase, but it is cool and fun nonetheless. 

### Modules