export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, user, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = question
  const { name, uid, avatarURL } = user
  const totalVoted = optionOne.votes.length + optionTwo.votes.length

  return {
    name,
    id,
    timestamp,
    uid,
    avatarURL: avatarURL,
    totalVoted,
    optionOne: {
      text: optionOne.text,
      count: optionOne.votes.length,
      hasVoted: optionOne.votes.includes(authedUser),
    },
    optionTwo: {
      text: optionTwo.text,
      count: optionTwo.votes.length,
      hasVoted: optionTwo.votes.includes(authedUser),
    },
  }
}
