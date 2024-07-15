import React, { Component } from 'react';

export class EmojiVote extends Component {
    constructor(props) {
        super(props);
        this.emojis = {
            'smiling': 'smiling.svg',
            'kiss': 'kiss.svg',
            'halo': 'halo.svg',
            'money': 'money.svg',
            'star': 'star.svg',
            'tongue': 'tongue.svg',
        };

        this.state = {
            votes: this.getStartVotes(),
            winner: null
        };
    }

    initialObjectVotes = () => {
        return Object.keys(this.emojis).reduce((acc, key) => {
            acc[key] = { emoji: key, vote: 0 };
            return acc;
        }, {});
    }
    getStartVotes()
    {
        const savedVotes = localStorage.getItem('emojiVotes');
        return savedVotes ? JSON.parse(savedVotes) : this.initialObjectVotes();
    }

    handleVote(emojiKey) {
        this.setState((prevState) => {
            const votes ={
                ...prevState.votes,
                [emojiKey]: {
                    ...prevState.votes[emojiKey],
                    vote: prevState.votes[emojiKey].vote + 1
                }
            };
            localStorage.setItem('emojiVotes', JSON.stringify(votes));
            return {votes} ;
        });

        localStorage.setItem('emojiVotes', JSON.stringify(this.state.votes));
    }

    handleShowResults = () => {
        const { votes } = this.state;
        const winner = Object.keys(votes).reduce((prev, cur) => votes[prev].vote > votes[cur].vote ? prev : cur);
        this.setState({winner});
    }

    handleClearResults = () => {
        localStorage.removeItem('emojiVotes');
        const initialVotes = this.initialObjectVotes();
        this.setState({ votes: initialVotes, winner: null});
    }
    render() {
        const {votes} = this.state;

        return (
            <div className="container">
                <h1>Vote for your favorite emoji!</h1>
                <div className="votes-block">
                    {Object.keys(votes).map((emojiKey) => (
                        <div key={emojiKey}>
                            <img
                                src={`./imagesEmoji/${this.emojis[emojiKey]}`}
                                alt={emojiKey}
                                style={{cursor:'pointer', width:'100px'}}
                                className="imgEmoji"
                                onClick={() => this.handleVote(emojiKey)}
                                    />
                                    <p>Votes: {votes[emojiKey].vote}</p>
                        </div>
                    ))}

                </div>
                <div className="btn-block">
                    <button onClick={this.handleShowResults}  className="btn">Show Results</button>
                    <button onClick={this.handleClearResults} className="btn">Clear Results</button>
                </div>
                {
                    this.state.winner && (
                        <div>
                            <h2>Winning Emoji:</h2>
                            <img
                                src={`./imagesEmoji/${this.emojis[this.state.winner]}`}
                                alt={this.state.winner}
                                style={{ width: '100px' }}
                            />
                            <p>Votes: {votes[this.state.winner].vote}</p>
                        </div>
                    )
                }
            </div>

        );
    }
}




