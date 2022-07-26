import { Header } from "./components/Header"
import { Post } from "./components/Post"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabhpadilha02.png',
      name: 'Gabriel Padilha',
      role: 'Web Developer',
    },
    content: [
     {type: 'paragraph', content: 'Fala galeraa 👋'},
     {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     {type: 'link', content:'👉{" "}jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-09 13:52:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://scontent.ffln5-1.fna.fbcdn.net/v/t1.6435-9/39700567_960304224161452_6752777058578857984_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=84a396&_nc_eui2=AeFGLRNkHIZwxEK9QRkB1jByzNmDTR_kOCvM2YNNH-Q4KzPrWGPdaC3mJnz9LtOPzPf9u69v3gyMNQbfc21G0OcX&_nc_ohc=WbF7jwh7k0QAX-zc8ov&_nc_ht=scontent.ffln5-1.fna&oh=00_AT-0n5UMIGrFLeeiwWaX-3qOsSoqj2eCF4tGRpiYB2_NDw&oe=63053899',
      name: 'Thor',
      role: 'Pet',
    },
    content: [
     {type: 'paragraph', content: 'AU AU AU AU 🐶'},
     {type: 'paragraph', content:'AU AU AU AU AU AU AU AU AU AU AU AU AU AU AU AU AU 🐼 '},
     {type: 'link', content:'👉{" "}jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-09 14:00:00')
  },
]


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              
              />
            )
          })}
        </main>
      </div>
      
    </>
    
  )  
}
export default App
