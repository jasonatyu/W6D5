import React from 'react';
import { Header } from './header';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(idx) {
        this.setState({ index: idx});
    } 

    render() {
        const { tabs } = this.props; 
        console.log(this.state.index)
        return (
            <>
               <Header callback={this.handleClick} tabs={tabs}/>
                <article>
                    {tabs[this.state.index].content}
                </article>
            </>
        );
    }
}

export default Tabs;