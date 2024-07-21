import React, { useState, useEffect } from 'react';
export function EmojiVote() {

    const emojis = {
            'smiling': 'smiling.svg',
            'kiss': 'kiss.svg',
            'halo': 'halo.svg',
            'money': 'money.svg',
            'star': 'star.svg',
            'tongue': 'tongue.svg',
    };

    const initialObjectVotes = () => {
        return Object.keys(emojis).reduce((acc, key) => {
            acc[key] = { emoji: key, vote: 0 };
            return acc;
        }, {});
    }
    const getStartVotes = () =>
    {
        const savedVotes = localStorage.getItem('emojiVotes');
        return savedVotes ? JSON.parse(savedVotes) : initialObjectVotes();
    }

    const [votes, setVotes] = useState(getStartVotes());
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        localStorage.setItem('emojiVotes', JSON.stringify(votes));
    }, [votes]);
    
    const handleVote = (emojiKey) => {
        setVotes(prevVotes => ({
                ...prevVotes,
                [emojiKey]: {
                    ...prevVotes[emojiKey],
                    vote: prevVotes[emojiKey].vote + 1
                }
            })) ;
        };

    const handleShowResults = () => {
        const winnerKey = Object.keys(votes).reduce((prev, cur) => votes[prev].vote > votes[cur].vote ? prev : cur);
        setWinner(winnerKey);
    }

    const handleClearResults = () => {
        localStorage.removeItem('emojiVotes');
        setVotes(initialObjectVotes());
        setWinner(null);
    }

    return (
            <div className="container">
                <h1>Vote for your favorite emoji!</h1>
                <div className="votes-block">
                    {Object.keys(votes).map((emojiKey) => (
                        <div key={emojiKey}>
                            <img
                                src={`./imagesEmoji/${emojis[emojiKey]}`}
                                alt={emojiKey}
                                style={{cursor:'pointer', width:'100px'}}
                                className="imgEmoji"
                                onClick={() => handleVote(emojiKey)}
                            />
                            <p>Votes: {votes[emojiKey].vote}</p>
                        </div>
                    ))}

                </div>
                <div className="btn-block">
                    <button onClick={handleShowResults}  className="btn">Show Results</button>
                    <button onClick={handleClearResults} className="btn">Clear Results</button>
                </div>
                {
                    winner && (
                        <div>
                            <h2>Winning Emoji:</h2>
                            <img
                                src={`./imagesEmoji/${emojis[winner]}`}
                                alt={winner}
                                style={{ width: '100px' }}
                            />
                            <p>Votes: {votes[winner].vote}</p>
                        </div>
                    )
                }
            </div>
    );
}




