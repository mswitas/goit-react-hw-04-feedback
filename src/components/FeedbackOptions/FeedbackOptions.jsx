import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <ul className={css.btnsList}>
        {options.map(option => {
            return (
                <li key={option}><button type="button" id={option} onClick={onLeaveFeedback}>{option}</button></li>
            );
        })}
    </ul>
);