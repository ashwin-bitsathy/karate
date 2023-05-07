Feature: Sample Feature

Scenario: Sample GET Request
  Given url 'https://jsonplaceholder.typicode.com/posts/1'
  When method get
  Then status 200
  And match response == { userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' }