import React from "react";

class ReactApp extends React.Component {
    state = {
        header: '',
        paragraph: '',
        image_url: '',
    };

    setHeader() {
        this.setState({
            header: 'This is a React Component'
        })
    }

    setParagraph() {
        this.setState({
            paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
        })
    }

    setImageUrl() {
        this.setState({
            image_url: 'img/react.png'
        })
    }

    componentDidMount() {
        this.setHeader();
        this.setParagraph();
        this.setImageUrl();
    }

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <p>
                    {this.state.paragraph}
                </p>
                <img src={this.state.image_url}/>
            </div>
        );
    }
}

export default ReactApp;
