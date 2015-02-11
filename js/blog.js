/* Blog.js */
$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("nW4OmTQBQDws4Na8fJiSYb3GYMdooWaqrkUvdpzL", "luvGAjP44vvWPfoG5I4JlRrfZK2NAo6GqbJh8x1b");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});