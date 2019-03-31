import React from "react";

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', comment: ''};

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onTitleChange(event){
        this.setState({title: event.target.value});
    }

    onCommentChange(event) {
        this.setState({comment: event.target.value});
    }

    onSubmit(event){
        alert(`${this.state.title} 'Какой пост!'`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <div>
                    <input type="text" id="title" name="title" placeholder="Title" value = {this.state.title}
                           onChange = {this.onTitleChange}/>
                </div>
                <div>
            <textarea type="textarea" id="subject" placeholder="Comment" maxlength="10000" rows = "10"
                      value = {this.state.comment}
                      onChange = {this.onCommentChange}></textarea>
                </div><div>
                <button type="submit" name="submit">Add Post</button>
            </div>
            </form>
        )
    }
}

export default AddPost