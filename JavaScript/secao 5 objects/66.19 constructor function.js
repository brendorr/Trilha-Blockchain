const blogpost = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 15,
    comments: [{
       author: 'd' ,
       body:'e'
    }],
    islive: true
}
console.log(blogpost);

function post(title,body,author){
    this.title = title,
    this.body = body,
    this.author =author,
    views = 0,
    comments= [],
    islive =false

}