
export const Statistics = ({ good, neutral, bad, total }) => (
    <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        {total > 0 ? (
            <p>Positive Feedback: {Math.round(good / total * 100)}%</p>
        ) : (
            <p>Positive Feedback: 0%</p>
        )}
    </div>
);
