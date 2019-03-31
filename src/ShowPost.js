import React from "react";

class ShowPost extends React.Component {
    render() {
        return (

            <div className="list-group">
                <h4>Title</h4>
                <p>Text.</p>
                <h4 >Title</h4>
                <p>Text.</p>
                <h4>Title</h4>
                <p>Text.</p>
            </div>
        )
    }
    /* constructor(props) {
         super(props);
         this.state = {
             posts:[]
         };
     }
     render() {
         return (
             <div className="list-group">
                 {
                     this.state.posts.map(function(post,index) {
                         return <a href="#" key={index}>
                             <h4>{post.title}</h4>
                             <p>{post.subject}</p>
                         </a>
                     })
                 }

             </div>
         )
     }
     */
}

export default ShowPost