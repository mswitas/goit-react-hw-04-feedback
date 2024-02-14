import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import css from "./App.module.css";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);

  const onLeaveFeedback = (event) => {
    switch (event.target.id) {
      case "Good":
        setGood((prev) => prev + 1);
        break;
      case "Neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "Bad":
        setBad((prev) => prev + 1);
        break;
      default:
    }
    setTotalFeedback((prev) => prev + 1);
  }

  return (
    <div className={css.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={["Good", "Neutral", "Bad"]} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
        />
      </Section>
    </div>
  );
};
