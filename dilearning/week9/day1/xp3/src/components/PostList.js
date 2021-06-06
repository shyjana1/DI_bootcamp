import React from 'react'
class PostList extends React.Component {
constructor(props) {
super(props)
this.state = {
    posts: [],
    errorMsg: ''
}
}
componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/posts')
// fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>{
 console.log(data)     

this.setState({posts:data})
})
.catch(err=>{
        console.log(err)             
})
}
render(){
    const {posts} =this.state;             
    
        return (
          <div className="text">
            {posts.map(posts => (
              <div key={posts.id}>
               <b>ID:</b>{posts.id} <br></br> <b>Title:</b>{posts.title} <br></br> <b>Body:</b>{posts.body}
              </div>
            ))}
          </div>
        );
        // return (
        //     <div className="text2">
        //       {posts.map(posts => (
        //         <div key={posts.id}>
        //           <b>ID:</b>{posts.id}<br></br> <b>Name:</b> {posts.name} <br></br> <b>Username:</b>{posts.username} <br></br> <b>Email:</b>{posts.email} <br></br> <b>city:</b>{posts.address.city}
        //         </div>
        //       ))}
        //     </div>
        //   );
               
            
        
      }
    }
// }
export default PostList;