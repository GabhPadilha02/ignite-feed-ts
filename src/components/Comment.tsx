import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


interface ContentProps {
    content: String;
    onDeleteComment: (comment:String) => void;
}

export function Comment({content, onDeleteComment}:ContentProps) {
    const [likesCount, setLikesCount] = useState(0)
    
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleNewLikeCount() {
        setLikesCount((stateOfLikes) => {
            return stateOfLikes + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gabhpadilha02.png" alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Padilha</strong>
                            <time title="08 de Junho às 14:35h" dateTime="2022-06-08 14:34:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleNewLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likesCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}