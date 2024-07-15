import React, { Component } from 'react';

export class EmojiVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: this.getStartVotes()
        }
        this.emojis = {
            'smiling': 'smiling.svg',
            'kiss': 'kiss.svg',
            'halo': 'halo.svg'
        }
    }

    getStartVotes()
    {
        const savedVotes = localStorage.getItem('emojiVotes');
        return savedVotes ? JSON.parse(savedVotes) : { 'smiling': 0, 'kiss': 0, 'halo': 0 };
    }

    handleVote() {
        const votes = {
            ...this.state.votes,

        }
        this.setState((prevState) => ({
            votes: prevState.votes +1
        }));

        localStorage.setItem('emojiVotes', JSON.stringify(this.state.votes));

        localStorage.setItem(this.storageKey, JSON.stringify(votes));

    }
    render() {
        const {votes} = this.state;

        return (
            <div className="container">
                <h1>Vote for your favorite emoji!</h1>
                <div>
                    {Object.keys(votes).map((emoji) => (
                        <div key={emoji}>
                            <img
                                src={`./imagesEmoji/${this.emojis[emoji]}`}
                                alt={emoji}
                                style={{cursor:'pointer', width:'100px'}}

                                onClick={() => this.handleVote()}
                            />
                            <p>Votes: {votes[emoji]}</p>
                        </div>
                    ))}

                </div>
            </div>
        );
    }
}




