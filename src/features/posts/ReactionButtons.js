import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
        thumbsUp: '👍',
        wow: '😲',
        heart: '❤️',
        rocket: '🚀',
        coffe: '🍵'
}

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={name} type="button" onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}>{emoji} {post.reactions[name]}</button>
        )
    })
  return (
    <div className="button">{reactionButtons}</div>
  )
}

export default ReactionButtons