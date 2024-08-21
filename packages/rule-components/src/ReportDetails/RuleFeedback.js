import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@patternfly/react-core';
import { ThumbsUpIcon } from '@patternfly/react-icons';
import { OutlinedThumbsUpIcon } from '@patternfly/react-icons';
import { ThumbsDownIcon } from '@patternfly/react-icons';
import { OutlinedThumbsDownIcon } from '@patternfly/react-icons';

export const feedback = { negative: -1, neutral: 0, positive: 1 };
// ruleId - is id of current rule
// onFeedbackChanged(ruleId, vote) is a callback which is called when feedback is changed
// where ruleId is id of the rule, vote is either -1, 0 or 1
class RuleFeedback extends React.Component {
  state = { feedbackSaved: false };

  handleFeedbackChange = (vote) => {
    const { ruleId, userVote, onFeedbackChanged } = this.props;
    if (userVote === vote) {
      onFeedbackChanged(ruleId, feedback.neutral);
    } else {
      this.setState({ feedbackSaved: true });
      onFeedbackChanged(ruleId, vote);
    }
  };
  render() {
    const { userVote } = this.props;
    return (
      <div>
        <span>Is this helpful?</span>
        <Button icon={<Icon color={userVote === feedback.positive ? 'var(--pf-t--global--color--status--success--default)' : undefined}>
            {userVote === feedback.positive ? <ThumbsUpIcon /> : <OutlinedThumbsUpIcon />}
          </Icon>}
          className="ins-c-rule__rule-feedback-like-button"
          variant="plain"
          aria-label="Rule is helpful"
          onClick={() => this.handleFeedbackChange(feedback.positive)}
        ></Button>
        <Button icon={<Icon color={userVote === feedback.negative ? 'var(--pf-t--global--text--color--regular)' : undefined}>
            {userVote === feedback.negative ? <ThumbsDownIcon /> : <OutlinedThumbsDownIcon />}
          </Icon>}
          className="ins-c-rule__rule-feedback-dislike-button"
          variant="plain"
          aria-label="Rule is not helpful"
          onClick={() => this.handleFeedbackChange(feedback.negative)}
        ></Button>
        {this.state.feedbackSaved && 'Thank you for your feedback!'}
      </div>
    );
  }
}

RuleFeedback.propTypes = {
  ruleId: PropTypes.string.isRequired,
  userVote: PropTypes.oneOf(Object.values(feedback)).isRequired,
  onFeedbackChanged: PropTypes.func.isRequired,
};

export default RuleFeedback;
